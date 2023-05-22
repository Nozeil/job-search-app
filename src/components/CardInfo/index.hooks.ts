import { COLORS_KEYS } from '@/constants';
import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    gap: theme.spacing.sm,
    lineHeight: 1.31,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },
  bull: {
    lineHeight: 'inherit',
    color: theme.colors[COLORS_KEYS.GREY_SCALE][5],

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));
