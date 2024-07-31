import { appWindow } from "@tauri-apps/api/window";

import { Container, Title, Group, ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoon, IconMinus, IconSquare, IconSquares, IconX } from '@tabler/icons-react';

import classes from './style.module.css';

export default function TitleBar() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const isColorSchemeDark = () => colorScheme === 'dark';

  const toggleTheme = () => {
    setColorScheme(isColorSchemeDark() ? 'light' : 'dark');
  };

  const iconVariant = 'subtle';
  const iconSize = 'sm';
  const iconColor = 'text';

  Object.assign(window, { appWindow });

  return (
    <header className={classes.header} data-tauri-drag-region>
      <Container fluid className={classes.inner} data-tauri-drag-region>
        <Title order={4} data-tauri-drag-region>Solace Queue Browser</Title>
        <Group justify="flex-end">
          <ActionIcon variant={iconVariant} size={iconSize} color={iconColor} onClick={toggleTheme}>
            {
              isColorSchemeDark() ?
              <IconSun /> :
              <IconMoon />
            }
          </ActionIcon>
          <ActionIcon variant={iconVariant} size={iconSize} color={iconColor}>
            <IconMinus />
          </ActionIcon>
          <ActionIcon variant={iconVariant} size={iconSize} color={iconColor}>
            <IconSquare size={14} />
          </ActionIcon>
          <ActionIcon variant={iconVariant} size={iconSize} color={iconColor}>
            <IconX />
          </ActionIcon>
        </Group>
      </Container>
    </header>
  );
}