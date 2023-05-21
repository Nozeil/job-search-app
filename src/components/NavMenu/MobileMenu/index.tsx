import { Group, Burger, Transition, Paper, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useStyles } from './index.hooks';
import Menu from '../Menu';
import useLockOverflow from '@/hooks/useLockOverflow';

export default function MobileMenu() {
  const [opened, { toggle, close }] = useDisclosure(false);
  useLockOverflow(opened);

  const { classes } = useStyles();

  return (
    <>
      <Group h="100%" position="right">
        <Burger onClick={toggle} opened={opened} />
      </Group>
      <Transition transition="skew-up" duration={200} mounted={opened}>
        {(styles) => (
          <Paper className={classes.dropdown} withBorder style={styles}>
            <Menu flexDirection="column" gap={20} fontSize={rem(20)} closeMenu={close} />
          </Paper>
        )}
      </Transition>
    </>
  );
}
