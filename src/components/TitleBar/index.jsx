import { appWindow } from "@tauri-apps/api/window";

import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';

import classes from './styles.module.css';
import { useEffect, useState } from "react";

export default function TitleBar() {
  const [colorScheme, setColorScheme] = useState('dark');

  const isColorSchemeDark = () => colorScheme === 'dark';

  const toggleTheme = () => {
    setColorScheme(prev => {
      const next = isColorSchemeDark() ? 'light' : 'dark';
      window.document.getElementById(`theme-${prev}`).rel = 'prefetch';
      window.document.getElementById(`theme-${next}`).rel = 'stylesheet';
      const contentFrame = window.document.querySelector('iframe');
      if(contentFrame) {
        contentFrame.contentDocument.getElementById(`theme-${prev}`).rel = 'prefetch';
        contentFrame.contentDocument.getElementById(`theme-${next}`).rel = 'stylesheet';
      }
      return next;
    });
  };

  const AppTitle = () => {
    return (
      <>
        <span style={{ paddingLeft: '1em' }}>Solace Queue Browser</span>
      </>
    )
  }

  const ControlButtons = () => {
    const [isMaximized, setIsMaximized] = useState(false);

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

    useEffect(() => {
      appWindow.isMaximized().then(setIsMaximized);
      appWindow.onResized(() => {
        appWindow.isMaximized().then(setIsMaximized);
      });
    }, []);

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
      end={window.__TAURI__ ? ControlButtons : <Button text icon={PrimeIcons.SUN} onClick={toggleTheme} />} />
  );
}