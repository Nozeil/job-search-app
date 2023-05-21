import { COLORS_KEYS, ICON_REF, SELECTORS, TRANSITON_DURATION_300 } from '@/constants';
import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, isFavorite: boolean) => {
  const { HOVER_ICON_REF } = SELECTORS.ICON_BUTTON.ROOT;
  const blue400 = theme.colors[COLORS_KEYS.BLUE_SCALE][4];
  const transitionDuration = TRANSITON_DURATION_300;

  return {
    root: {
      transitionDuration,
      [HOVER_ICON_REF]: {
        stroke: blue400,
      },
    },

    icon: {
      ref: ICON_REF,
      fill: isFavorite ? blue400 : 'none',
      stroke: isFavorite ? blue400 : theme.colors[COLORS_KEYS.GREY_SCALE][4],
      strokeWidth: '1.5',
      transitionDuration,
    },
  };
});
