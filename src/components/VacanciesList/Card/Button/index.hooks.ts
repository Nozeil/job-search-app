import { COLORS_KEYS, ICON_REF, SELECTORS, TRANSITON_DURATION_300 } from '@/constants';
import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
  const { HOVER_ICON_REF, ACTIVE_ICON_REF } = SELECTORS.ICON_BUTTON.ROOT;
  const blue400 = theme.colors[COLORS_KEYS.BLUE_SCALE][4];
  const transitionDuration = TRANSITON_DURATION_300;

  return {
    root: {
      transitionDuration,
      [HOVER_ICON_REF]: {
        stroke: blue400,
      },
      [ACTIVE_ICON_REF]: {
        fill: blue400,
      },
    },

    icon: {
      ref: ICON_REF,
      stroke: theme.colors[COLORS_KEYS.GREY_SCALE][4],
      strokeWidth: '1.5',
      transitionDuration,
    },
  };
});
