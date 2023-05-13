import { COLORS_KEYS } from '@/constants';
import { theme } from '@/theme';

export const COLORS = {
  ACTIVE: theme.colors[COLORS_KEYS.BLUE_SCALE][4],
  DEFAULT: theme.black,
} as const;
