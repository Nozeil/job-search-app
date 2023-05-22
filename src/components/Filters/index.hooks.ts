import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    maxWidth: 315,
    background: theme.white,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: 'none',
    },
  },
}));
