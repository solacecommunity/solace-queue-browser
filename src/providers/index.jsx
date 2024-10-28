import { PrimeReactProvider } from 'primereact/api';

import { SolaceConfigProvider, ConfigSource } from './SolaceConfigProvider';
import { SolaceSempProvider } from './SolaceSempProvider';
import { SolaceQueueContextProvider } from '../hooks/solace';

import { ApiClient } from '../utils/solace/semp';


export default function Providers({ children }) {
  const primeConfig = {
    cssTransition: false,
    ripple: false
  };

  return (
    <PrimeReactProvider value={primeConfig}>
      <SolaceConfigProvider source={window.__TAURI__ ? ConfigSource.FS : ConfigSource.LOCAL_STORAGE}>
        <SolaceSempProvider value={ApiClient}>
          <SolaceQueueContextProvider>
            {children}
          </SolaceQueueContextProvider>
        </SolaceSempProvider>
      </SolaceConfigProvider>
    </PrimeReactProvider>
  );
}