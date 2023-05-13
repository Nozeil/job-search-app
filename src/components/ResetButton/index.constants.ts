import { getStylesRef } from '@mantine/core';
export const ICON_REF = getStylesRef('icon');

export const SELECTORS = {
  ROOT: {
    HOVER: '&:hover',
    ACTIVE: '&:active',
    HOVER_ICON_REF: `&:hover .${ICON_REF}`,
    ACTIVE_ICON_REF: `&:active .${ICON_REF}`,
  },
} as const;
