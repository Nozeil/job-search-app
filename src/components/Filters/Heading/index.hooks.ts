import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 67,

    [theme.fn.smallerThan('sm')]: {
      gap: 20,
    },
  },
}));
