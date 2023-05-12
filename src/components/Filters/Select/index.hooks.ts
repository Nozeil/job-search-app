import { createStyles, rem } from '@mantine/core';
import { COLORS_KEYS, TRANSITON_DURATION_300 } from '@/constants';
import { SELECTORS } from './index.constants';

export const useStyles = createStyles((theme, opened: boolean) => {
  const grey400 = theme.colors[COLORS_KEYS.GREY_SCALE][4];
  const transitionDuration = TRANSITON_DURATION_300;
  const borderRadius = 8;
  const thumbWidthAndHeight = 4;

  return {
    root: {
      lineHeight: 1.2,
    },

    dropdown: {
      borderWidth: 0,
      borderRadius,
      [SELECTORS.THUMB.VERTICAL]: {
        maxWidth: thumbWidthAndHeight,
      },

      [SELECTORS.THUMB.HORIZONTAL]: {
        maxHeight: thumbWidthAndHeight,
      },

      [SELECTORS.THUMB.both()]: {
        background: grey400,
      },
    },

    rightSection: {
      pointerEvents: 'none',
      transitionDuration,
      transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
    },

    icon: {
      stroke: opened ? theme.colors[COLORS_KEYS.BLUE_SCALE][5] : grey400,
      transitionDuration,
    },

    item: {
      padding: 8,
      borderRadius,
      fontSize: rem(14),
      fontWeight: 'normal',
      lineHeight: '20px',
      transitionDuration,

      [SELECTORS.ITEM.HOVERED]: {
        backgroundColor: theme.colors[COLORS_KEYS.BLUE_SCALE][0],
      },

      [SELECTORS.ITEM.SELECTED]: {
        color: theme.white,
        backgroundColor: theme.colors[COLORS_KEYS.BLUE_SCALE][4],
      },

      [SELECTORS.ITEM.both()]: {
        paddingRight: 12,
        paddingLeft: 12,
      },
    },
  };
});
