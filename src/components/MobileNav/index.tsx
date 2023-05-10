import { SIZES } from '@/constants';
import { createStyles, Group, Burger, Transition, Paper, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import NavMenu from '../NavMenu';

const useStyles = createStyles(() => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: SIZES.HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    height: '50vh',
    minHeight: 200,
    padding: 20,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflowY: 'auto',
  },
}));

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
