import { MantineTheme, MantineThemeColors } from '@mantine/core';
import { BUTTON_VARIANTS, COLORS_KEYS, FONTS, TRANSITON_DURATION_300 } from './constants';

const { GREY_SCALE, BLUE_SCALE } = COLORS_KEYS;

export const theme = {
  fontFamily: FONTS.MAIN,
  black: '#232134',
  colors: {
    [GREY_SCALE]: ['#F5F5F6', '#F7F7F8', '#EAEBED', '#D5D6DC', '#ACADB9', '#7B7C88'],
    [BLUE_SCALE]: ['#DEECFF', '#C9E0FF', '#B7D6FF', '#92C1FF', '#5E96FC', '#3B7CD3'],
  } as unknown as MantineThemeColors,
  components: {
    Container: {
      defaultProps: {
        sizes: {
          lg: 1148,
        },
      },
    },
    Input: {
      styles: (theme: MantineTheme) => {
        const blue400 = theme.colors[BLUE_SCALE][4];
        return {
          input: {
            borderRadius: theme.fn.radius('md'),
            borderColor: theme.colors[GREY_SCALE][3],
            transitionDuration: TRANSITON_DURATION_300,
            caretColor: blue400,

            '&:hover, &:focus': {
              borderColor: blue400,
            },
            '::placeholder': {
              fontSize: 14,
              color: theme.colors[GREY_SCALE][4],
            },
          },
        };
      },
    },
    Button: {
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
    },
  },
  transitionTimingFunction: 'ease-in-out',
} as const;
