import { createContext, useContext, useEffect, useState } from "react";
import { BaseDirectory } from "@tauri-apps/api/fs";
import { fs } from '../utils/tauri/api';

const SolaceConfigContext = createContext(null);

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
    const filteredBrokers =  brokers.filter(b => b.id !== config.id);
    source.writeConfig(filteredBrokers);
    setBrokers(filteredBrokers);
  };

  return {
    brokers,
    saveBroker,
    deleteBroker
  };
}