import { getStylesRef } from '@mantine/core';

export const ICON_REFS = {
  UP: getStylesRef('upIcon'),
  DOWN: getStylesRef('downIcon'),
} as const;

export const SELECTORS = {
  HOVER: `&:hover .${ICON_REFS.UP}, &:hover .${ICON_REFS.DOWN}`,
  ACTIVE: `&:active .${ICON_REFS.UP}, &:active .${ICON_REFS.DOWN}`,
} as const;
