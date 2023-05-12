import { COLORS_KEYS } from '@/constants';
import { theme } from '@/theme';

export const COLORS = {
  ACTIVE: theme.colors[COLORS_KEYS.BLUE_SCALE][5],
  DEFAULT: theme.black,
} as const;
