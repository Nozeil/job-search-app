import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  root: {
    display: 'block',
    height: '100%',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));
