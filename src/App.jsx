// import { createTheme, MantineProvider, DEFAULT_THEME } from '@mantine/core';

import TitleBar from './components/TitleBar';
import Toolbar from './components/Toolbar';
import RootLayout from './components/RootLayout';

import { PrimeReactContext, PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';

import 'primeicons/primeicons.css';

import './App.css';
import { SolaceConfigProvider } from './hooks/solace';

export default function App() {

  const primeConfig = {
    cssTransition: false,
    ripple: false
  };

  return (
    <PrimeReactProvider value={primeConfig}>
      <SolaceConfigProvider>
      <header>
        <TitleBar />
      </header>
      <nav>
        <Toolbar />
      </nav>
      <main>
        <RootLayout />
      </main>
      </SolaceConfigProvider>
    </PrimeReactProvider>
  );
}