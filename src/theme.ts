import { MantineThemeColors } from '@mantine/core';
import { COLORS, FONTS } from './constants';

const { GREY_SCALE, BLUE_SCALE } = COLORS;

export const theme = {
  fontFamily: FONTS.MAIN,
  black: '#232134',
  colors: {
    [GREY_SCALE]: ['#F5F5F6', '#EAEBED', '#D5D6DC', '#ACADB9', '#7B7C88'],
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
} as const;
