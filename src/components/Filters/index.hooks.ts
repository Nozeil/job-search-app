import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    maxWidth: 315,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: 'none',
    },
  },

  stack: {
    background: theme.white,
  },
}));
