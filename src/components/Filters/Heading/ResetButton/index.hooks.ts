import { COLORS_KEYS, ICON_REF, SELECTORS, TRANSITON_DURATION_300 } from '@/constants';
import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
  const colors = {
    hover: theme.colors[COLORS_KEYS.BLUE_SCALE][3],
    active: theme.colors[COLORS_KEYS.BLUE_SCALE][4],
    grey400: theme.colors[COLORS_KEYS.GREY_SCALE][4],
  } as const;
  const transitionDuration = TRANSITON_DURATION_300;
  const { HOVER_ICON_REF, ACTIVE_ICON_REF } = SELECTORS.ICON_BUTTON.ROOT;

  return {
    root: {
      height: 'fit-content',
      padding: 0,
      border: 0,
      fontWeight: 500,
      color: colors.grey400,
      background: 'transparent',
      transitionDuration,

      '&:hover': {
        color: colors.hover,
        background: 'transparent',
      },

      '&:active': {
        color: colors.active,
      },

      [HOVER_ICON_REF]: {
        stroke: colors.hover,
      },

      [ACTIVE_ICON_REF]: {
        stroke: colors.active,
      },
    },

    rightIcon: {
      marginLeft: 4,
    },

    icon: {
      ref: ICON_REF,
      stroke: colors.grey400,
      strokeWidth: '1.25',
      transitionDuration,
    },
  };
});
