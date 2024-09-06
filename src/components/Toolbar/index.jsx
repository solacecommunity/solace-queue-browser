import { useState } from 'react';

import { Toolbar as PrimeToolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';

import ConfigServerDialog from '../ConfigServerDialog';

import styles from './styles.module.css';

export default function Toolbar() {
  const [newServerConfig, setNewServerConfig] = useState(null);

  return (
    <>
      <PrimeToolbar className={styles.toolbar} start={() => <Button size="small" onClick={() => setNewServerConfig({})}>Add Server</Button>} />
      <ConfigServerDialog config={newServerConfig} onHide={() => setNewServerConfig(null)} />
    </>
  );
}