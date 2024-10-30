import { createContext, useContext, useEffect, useState } from "react";
import { BaseDirectory } from "@tauri-apps/api/fs";
import { fs } from '../utils/tauri/api';

import { useSempApi } from "./SolaceSempProvider";
import { ReplayLogApi } from "../utils/solace/semp/monitor";
import solace from '../utils/solace/solclientasync';

const SolaceConfigContext = createContext();

export const ConfigSource = {
  FS: {
    readConfig: async () => {
      fs.createDir('', { dir: BaseDirectory.AppConfig, recursive: true });
      if (await fs.exists('config.json', { dir: BaseDirectory.AppConfig })) {
        const configData = await fs.readTextFile('config.json', { dir: BaseDirectory.AppConfig })
        return JSON.parse(configData);
      } else {
        console.log('no config found');
        return [];
      }
    },
    writeConfig: async (brokers) => {
      fs.writeTextFile('config.json', JSON.stringify(brokers), { dir: BaseDirectory.AppConfig });
    }
  },
  LOCAL_STORAGE: {
    readConfig: async () => {
      const configData = window.localStorage.getItem('config');
      return configData ? JSON.parse(configData) : [];
    },
    writeConfig: async (brokers) => {
      window.localStorage.setItem('config', JSON.stringify(brokers));
    }
  }
}

export function SolaceConfigProvider({ source, children }) {
  const [brokers, setBrokers] = useState([]);
  return (
    <SolaceConfigContext.Provider value={{ source, brokers, setBrokers }}>
      {children}
    </SolaceConfigContext.Provider>
  )
}

export function useSolaceConfigContext() {
  const { source, brokers, setBrokers } = useContext(SolaceConfigContext);
  const replayLogApiContext = useSempApi(ReplayLogApi);

  useEffect(() => {
    source.readConfig().then(brokers => setBrokers(brokers));
  }, []);

  const saveBroker = (config) => {
    const match = brokers.find(b => b.id === config.id);
    if (match === undefined) {
      config.id = Date.now();
      brokers.push(config);
    } else {
      Object.assign(match, config);
    }
    source.writeConfig(brokers);
    console.log('setbrokers')
    setBrokers([...brokers]);
  };

  const deleteBroker = (config) => {
    const filteredBrokers = brokers.filter(b => b.id !== config.id);
    source.writeConfig(filteredBrokers);
    setBrokers(filteredBrokers);
  };

  const testBroker = async (config) => {
    // TODO: consider a solace.with(config)
    const { vpn, useTls, hostName, clientPort, clientUsername, clientPassword } = config;

    try {
      const session = solace.SolclientFactory.createAsyncSession({
        url: `${(useTls ? 'wss' : 'ws')}://${hostName}:${clientPort}`,
        vpnName: vpn,
        userName: clientUsername,
        password: clientPassword,
        reconnectRetries: 0,
        connectRetries: 0
      });
      await session.connect();
      session.disconnect();
    } catch (err) {
      console.error(err);

      if(err.responseCode) switch(err.responseCode) {
        case 401:
          return { result: false, severity: 'error', summary: 'SMF: Unauthorized', detail: 'Incorrect client username or password.' }
      }
      
      const errMsg = err.message;

      if (errMsg.includes('invalid URL')) {
        return { result: false, severity: 'error', summary: 'SMF: Failure', detail: 'Invalid broker URL.'}
      }
      if (errMsg.includes('Connection error')) {
        return { result: false, severity: 'error', summary: 'SMF: Failure', detail: 'General connection error.'}
      }

      return { result: false, severity: 'error', summary: 'SMF: Connection Error', detail: 'Unknown error!' };    
    }

    const replayLogApi = replayLogApiContext.with(config);

    const handleResponse = ({status, body}) => {
      const errorDetail = (
        body?.meta?.error?.description ||
        (() => {
          const html = document.createElement('html');
          html.innerHTML = body;
          return html.querySelectorAll('center')?.[1]?.innerText;
        })() ||
        'Unexpected error'
      ) + '.';
      switch (status) {
        case 200:
          if (body.data.length > 0) {
            return { result: true, severity: 'info', summary: 'Success', detail: 'Broker connection succeeded.' };
          } else {
            return { result: true, severity: 'warn', summary: 'Warning', detail: 'Replay Log not enabled on broker.' }
          }
        case 400:
          return { result: false, severity: 'error', summary: 'SEMP: Bad Request', detail: errorDetail };
        case 401:
          return { result: false, severity: 'error', summary: 'SEMP: Unauthorized', detail: errorDetail };
        case 403:
          return { result: false, severity: 'error', summary: 'SEMP: Forbidden', detail: errorDetail };
      }
    };

    try {
      const { response } = await replayLogApi.getMsgVpnReplayLogsWithHttpInfo(vpn, { select: ['replayLogName'] });
      return handleResponse(response);
    } catch (err) {
      if(err.status && err.response) {
        return handleResponse(err.response);
      } else {
        console.error(err);
        const errMsg = err.toString();
        
        if (
          errMsg.includes('Invalid URL') ||
          errMsg.includes('expected empty host')
        ) {
          return { result: false, severity: 'error', summary: 'SEMP: Failure', detail: 'Invalid broker URL.' };
        }
        
        if (
          errMsg.includes('Network Error') ||
          errMsg.includes('Request has been terminated')
        ) {
          return { result: false, severity: 'error', summary: 'SEMP: Failure', detail: 'Broker service unreachable.' }
        }
      }
      return { result: false, severity: 'error', summary: 'SEMP: Failure', detail: 'Unknown error!' };
    }
  };

  return {
    brokers,
    brokerEditor: {
      save: saveBroker,
      delete: deleteBroker,
      test: testBroker
    }
  };
}