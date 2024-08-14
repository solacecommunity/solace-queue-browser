import { appWindow } from "@tauri-apps/api/window";

import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';

import classes from './styles.module.css';
import { useEffect, useState } from "react";

export default function TitleBar() {
  const [colorScheme, setColorScheme] = useState('dark');
  const [isMaximized, setIsMaximized] = useState(false);

  const isColorSchemeDark = () => colorScheme === 'dark';

  useEffect(() => {
    appWindow.isMaximized().then(setIsMaximized);
    appWindow.onResized(() => {
      appWindow.isMaximized().then(setIsMaximized);
    });
  }, []);

  const toggleTheme = () => {
    setColorScheme(prev => {
      const next = isColorSchemeDark() ? 'light' : 'dark';
      window.document.getElementById(`theme-${prev}`).rel = 'prefetch';
      window.document.getElementById(`theme-${next}`).rel = 'stylesheet';
      return next;
    });
  };

  const minimizeWindow = () => {
    appWindow.minimize();
  };

  const restoreWindow = () => {
    setIsMaximized(false);
    appWindow.unmaximize();
  };

  const maximizeWindow = () => {
    setIsMaximized(true);
    appWindow.maximize();
  };

  const closeWindow = () => {
    appWindow.close();
  };

  const AppTitle = () => {
    return (
      <>
        <span style={{ paddingLeft: '1em' }}>Solace Queue Browser</span>
      </>
    )
  }

  const ControlButtons = () => {
    return (
      <>
        <Button text icon={PrimeIcons.SUN} onClick={toggleTheme} />
        <Button text icon={PrimeIcons.MINUS} onClick={minimizeWindow} />
        { 
          isMaximized ? 
          <Button text icon={PrimeIcons.WINDOW_MINIMIZE} onClick={restoreWindow} /> :
          <Button text icon={PrimeIcons.WINDOW_MAXIMIZE} onClick={maximizeWindow} />        
        }
        <Button text icon={PrimeIcons.TIMES} onClick={closeWindow} />
      </>
    )
  };

  return (
    <Toolbar className={classes.toolbar} data-tauri-drag-region
      start={AppTitle}
      end={ControlButtons} />
  );
}