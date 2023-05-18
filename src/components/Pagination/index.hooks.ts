import { COLORS_KEYS } from '@/constants';
import { type MantineTheme, createStyles } from '@mantine/core';
import { SELECTORS } from './index.constants';

export const useStyles = createStyles((theme: MantineTheme) => ({
  control: {
    borderColor: theme.colors[COLORS_KEYS.GREY_SCALE][3],
    [SELECTORS.DISABLED]: {
      borderColor: theme.colors[COLORS_KEYS.GREY_SCALE][2],
    },
    [SELECTORS.ACTIVE]: {
      background: theme.colors[COLORS_KEYS.BLUE_SCALE][4],
    },
  },
}));
