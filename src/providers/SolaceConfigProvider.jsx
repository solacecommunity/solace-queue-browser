import { createContext, useContext, useEffect, useState } from "react";
import { fs } from "@tauri-apps/api";
import { BaseDirectory } from "@tauri-apps/api/fs";

const SolaceConfigContext = createContext(null);

function writeConfig(brokers) {
  if(window.__TAURI__) {
    fs.writeTextFile('config.json', JSON.stringify(brokers), { dir: BaseDirectory.AppConfig });
  } else {
    window.localStorage.setItem('config', JSON.stringify(brokers));
  }
}

async function readConfig() {
  if(window.__TAURI__) {
    fs.createDir('', { dir: BaseDirectory.AppConfig, recursive: true });
    if (await fs.exists('config.json', { dir: BaseDirectory.AppConfig })) {
      const configData = await fs.readTextFile('config.json', { dir: BaseDirectory.AppConfig })
      return JSON.parse(configData);
    } else {
      console.log('no config found');
      return [];
    }
  } else {
    const configData = window.localStorage.getItem('config');
    return configData ? JSON.parse(configData) : [];
  }
}

export function SolaceConfigProvider({ children }) {
  const [brokers, setBrokers] = useState([]);

  useEffect(() => {
    readConfig().then(brokers => setBrokers(brokers));
  }, []);

  const saveBroker = (config) => {
    const match = brokers.find(b => b.id === config.id);
    if (match === undefined) {
      config.id = Date.now();
      brokers.push(config);
    } else {
      Object.assign(match, config);
    }
    writeConfig(brokers);
    setBrokers([...brokers]);
  };

  const deleteBroker = (config) => {
    const filteredBrokers =  brokers.filter(b => b.id !== config.id);
    writeConfig(filteredBrokers);
    setBrokers(filteredBrokers);
  };

  const value = {
    brokers,
    saveBroker,
    deleteBroker
  };

  return (
    <SolaceConfigContext.Provider value={value}>
      {children}
    </SolaceConfigContext.Provider>
  )
}

export function useSolaceConfigContext() {
  return useContext(SolaceConfigContext);
}