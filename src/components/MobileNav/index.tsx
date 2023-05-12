import { Group, Burger, Transition, Paper, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import NavMenu from '../NavMenu';
import { useStyles } from './index.hooks';

export default function MobileNav() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <>
      <Group h="100%" position="right">
        <Burger onClick={toggle} opened={opened} />
      </Group>
      <Transition transition="skew-up" duration={200} mounted={opened}>
        {(styles) => (
          <Paper className={classes.dropdown} withBorder style={styles}>
            <NavMenu flexDirection="column" gap={20} fontSize={rem(20)} closeMenu={close} />
          </Paper>
        )}
      </Transition>
    </>
  );
}
