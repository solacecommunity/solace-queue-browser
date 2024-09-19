import Toolbar from './components/Toolbar';
import RootLayout from './components/RootLayout';
import DesktopContainer from './components/DesktopContainer';

import { PrimeReactProvider } from 'primereact/api';

import 'primeicons/primeicons.css';

import './App.css';
import { SolaceConfigProvider } from './providers/SolaceConfigProvider';
import { SolaceSempProvider } from './providers/SolaceSempProvider';
import { ApiClient } from './utils/solace/semp';

export default function App() {

  const primeConfig = {
    cssTransition: false,
    ripple: false
  };

  return (
    window.location.pathname === '/desktop' ?
    <DesktopContainer /> :
    <PrimeReactProvider value={primeConfig}>
      <SolaceConfigProvider>
        <SolaceSempProvider value={ApiClient}>
          <header>
            <Toolbar />
          </header>
          <main>
            <RootLayout />
          </main>
        </SolaceSempProvider>
      </SolaceConfigProvider>
    </PrimeReactProvider>
  );
}