import { COLORS_KEYS } from '@/constants';
import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, value: string) => ({
  input: {
    height: 48,
    borderColor: value
      ? theme.colors[COLORS_KEYS.GREY_SCALE][2]
      : theme.colors[COLORS_KEYS.GREY_SCALE][3],
  },
}));
