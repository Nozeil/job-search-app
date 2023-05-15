import { COLORS_KEYS, TRANSITON_DURATION_300 } from '@/constants';
import { createStyles } from '@mantine/core';
import { ICON_REFS, SELECTORS } from './index.constants';

export const useStyles = createStyles((theme) => ({
  root: {
    [SELECTORS.HOVER]: {
      stroke: theme.colors[COLORS_KEYS.BLUE_SCALE][3],
    },

    [SELECTORS.ACTIVE]: {
      stroke: theme.colors[COLORS_KEYS.BLUE_SCALE][4],
    },
  },

  icon: {
    stroke: theme.colors[COLORS_KEYS.GREY_SCALE][4],
    strokeWidth: '1.5',
    strokeLinecap: 'round',
    transitionDuration: TRANSITON_DURATION_300,
  },

  downIcon: {
    ref: ICON_REFS.DOWN,
  },

  upIcon: {
    ref: ICON_REFS.UP,
  },
}));
