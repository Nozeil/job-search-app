import { getStylesRef } from '@mantine/core';

export const PATHS = {
  SEARCH_PAGE: '/',
  FAVORITES_PAGE: 'favorites',
  VACANCY_PAGE: 'vacancy',
  EMPTY_PAGE: 'empty',
} as const;

export const FONTS = {
  MAIN: 'Inter',
  PRIMARY: 'Poppins',
} as const;

export const COLORS_KEYS = {
  GREY_SCALE: 'grey-scale',
  BLUE_SCALE: 'blue-scale',
} as const;

export const SIZES = {
  HEADER_HEIGHT: 84,
} as const;

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
};

export const TRANSITON_DURATION_300 = '300ms';

export const ICON_REF = getStylesRef('icon');

export const SELECTORS = {
  ICON_BUTTON: {
    ROOT: {
      HOVER_ICON_REF: `&:hover .${ICON_REF}`,
      ACTIVE_ICON_REF: `&:active .${ICON_REF}`,
    },
  },
} as const;

export const LS_KEYS = {
  IDS: 'ids',
} as const;
