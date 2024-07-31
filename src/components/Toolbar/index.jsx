import { Button } from "@mantine/core";

import styles from './style.module.css';

export default function Toolbar() {
  return (
    <nav className={styles.toolbar}>
      <Button variant="default" size="xs">Add Server</Button>
    </nav>
  );
}