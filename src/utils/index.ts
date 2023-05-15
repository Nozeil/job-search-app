import { COLORS_KEYS } from '@/constants';
import { MantineTheme, rem } from '@mantine/core';

export const getXsSolidBorderStyles = (theme: MantineTheme) => ({
  border: `${rem(1)} solid ${theme.colors[COLORS_KEYS.GREY_SCALE][2]}`,
  borderRadius: 12,
});
