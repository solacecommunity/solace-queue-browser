import { createTheme, MantineProvider, DEFAULT_THEME } from '@mantine/core';

import TitleBar from './components/TitleBar';
import Toolbar from './components/Toolbar';
import RootLayout from './components/RootLayout';

import '@mantine/core/styles.css';
import './App.css';

export default function App() {
  return (
    <MantineProvider theme={DEFAULT_THEME} defaultColorScheme="dark">
      <TitleBar />
      <Toolbar />
      <RootLayout />
    </MantineProvider>
  );
}