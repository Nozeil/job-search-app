import { MantineTheme, MantineThemeColors } from '@mantine/core';
import { COLORS_KEYS, FONTS, TRANSITON_DURATION_300 } from './constants';

const { GREY_SCALE, BLUE_SCALE } = COLORS_KEYS;

export const theme = {
  fontFamily: FONTS.MAIN,
  black: '#232134',
  colors: {
    [GREY_SCALE]: ['#F5F5F6', '#F7F7F8', '#EAEBED', '#D5D6DC', '#ACADB9', '#7B7C88'],
    [BLUE_SCALE]: ['#DEECFF', '#C9E0FF', '#B7D6FF', '#92C1FF', '#5E96FC', '#5E96FC'],
  } as unknown as MantineThemeColors,
  components: {
    Container: {
      defaultProps: {
        sizes: {
          lg: 1148,
        },
      },
    },
  },
  transitionTimingFunction: 'ease-in-out',
  globalStyles: (theme: MantineTheme) => ({
    input: {
      borderColor: theme.colors[GREY_SCALE][3],
      transitionDuration: TRANSITON_DURATION_300,

      '&:hover, &:focus': {
        borderColor: theme.colors[BLUE_SCALE][5],
      },
      '::placeholder': {
        fontSize: 14,
        color: theme.colors[GREY_SCALE][4],
      },
    },
  }),
} as const;
