import { PrimeReactProvider } from 'primereact/api';

import { SolaceConfigProvider, ConfigSource } from './SolaceConfigProvider';
import { SolaceSempProvider } from './SolaceSempProvider';

import { ApiClient } from '../utils/solace/semp';


export default function Providers({ children }) {
  const primeConfig = {
    cssTransition: false,
    ripple: false
  };

  return (
    <PrimeReactProvider value={primeConfig}>
      <SolaceSempProvider value={ApiClient}>
        <SolaceConfigProvider source={window.__TAURI__ ? ConfigSource.FS : ConfigSource.LOCAL_STORAGE}>
          {children}
        </SolaceConfigProvider>
      </SolaceSempProvider>
    </PrimeReactProvider>
  );
}