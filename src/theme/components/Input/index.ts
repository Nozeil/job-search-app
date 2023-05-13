import { MantineTheme } from '@mantine/core';
import { COLORS_KEYS, TRANSITON_DURATION_300 } from '@/constants';

const { GREY_SCALE, BLUE_SCALE } = COLORS_KEYS;

const INPUT = {
  styles: (theme: MantineTheme) => {
    const blue400 = theme.colors[BLUE_SCALE][4];
    return {
      input: {
        paddingLeft: 12,
        borderRadius: theme.fn.radius('md'),
        borderColor: theme.colors[GREY_SCALE][3],
        transitionDuration: TRANSITON_DURATION_300,
        caretColor: blue400,

        '&:hover, &:focus': {
          borderColor: blue400,
        },
        '::placeholder': {
          fontSize: 14,
          lineHeight: 0,
          color: theme.colors[GREY_SCALE][4],
        },
      },
    };
  },
};

export default INPUT;
