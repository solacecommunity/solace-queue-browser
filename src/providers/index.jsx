import { PrimeReactProvider } from 'primereact/api';

import { BrokerConfigProvider, ConfigSource } from './BrokerConfigProvider';
import { SempClientProvider } from './SempClientProvider';

import { TauriClient, FetchClient } from '../utils/solace/semp';

const TAURI_APP = window.top.__TAURI__ ? true : false;

export default function Providers({ children }) {
  const primeConfig = {
    cssTransition: false,
    ripple: false
  };

  return (
    <PrimeReactProvider value={primeConfig}>
      <SempClientProvider value={TAURI_APP ? TauriClient : FetchClient}>
        <BrokerConfigProvider source={TAURI_APP ? ConfigSource.FS : ConfigSource.LOCAL_STORAGE}>
          {children}
        </BrokerConfigProvider>
      </SempClientProvider>
    </PrimeReactProvider>
  );
}