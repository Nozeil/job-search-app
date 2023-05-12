import { COLORS_KEYS, TRANSITON_DURATION_300 } from '@/constants';
import { createStyles, getStylesRef } from '@mantine/core';

export const useStyles = createStyles((theme) => {
  const colors = {
    hover: theme.colors[COLORS_KEYS.BLUE_SCALE][3],
    active: theme.colors[COLORS_KEYS.BLUE_SCALE][4],
  } as const;
  const transitionDuration = TRANSITON_DURATION_300;
  const iconRef = 'icon';

  return {
    root: {
      height: 'fit-content',
      padding: 0,
      border: 0,
      fontWeight: 500,
      color: theme.colors[COLORS_KEYS.GREY_SCALE][4],
      background: 'transparent',
      transitionDuration,

      '&:hover': {
        color: colors.hover,
      },

      '&:active': {
        color: colors.active,
      },

      [`&:hover .${getStylesRef(iconRef)}`]: {
        stroke: colors.hover,
      },

      [`&:active .${getStylesRef(iconRef)}`]: {
        stroke: colors.active,
      },
    },

    rightIcon: {
      marginLeft: 4,
    },

    icon: {
      ref: getStylesRef(iconRef),
      transitionDuration,
    },
  };
});
