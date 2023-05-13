import { MantineTheme } from '@mantine/core';
import { BUTTON_VARIANTS, COLORS_KEYS, TRANSITON_DURATION_300 } from '@/constants';

const { BLUE_SCALE } = COLORS_KEYS;

const BUTTON = {
  variants: {
    [BUTTON_VARIANTS.PRIMARY]: (theme: MantineTheme) => ({
      root: {
        borderRadius: theme.fn.radius('md'),
        fontWeight: 500,
        color: theme.white,
        backgroundColor: theme.colors[BLUE_SCALE][4],
        transitionDuration: TRANSITON_DURATION_300,

        '&:hover': {
          backgroundColor: theme.colors[BLUE_SCALE][3],
        },

        '&:active': {
          backgroundColor: theme.colors[BLUE_SCALE][5],
        },
      },
    }),
  },
};

export default BUTTON;
