// import { createTheme, MantineProvider, DEFAULT_THEME } from '@mantine/core';

import TitleBar from './components/TitleBar';
import Toolbar from './components/Toolbar';
import RootLayout from './components/RootLayout';

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
    <PrimeReactProvider value={primeConfig}>
      <SolaceConfigProvider>
        <SolaceSempProvider value={ApiClient}>
          <header>
            <TitleBar />
          </header>
          <nav>
            <Toolbar />
          </nav>
          <main>
            <RootLayout />
          </main>
        </SolaceSempProvider>
      </SolaceConfigProvider>
    </PrimeReactProvider>
  );
}