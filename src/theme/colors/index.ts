import { MantineThemeColors } from '@mantine/core';
import { COLORS_KEYS } from '@/constants';

const { GREY_SCALE, BLUE_SCALE } = COLORS_KEYS;

const COLORS = {
  [GREY_SCALE]: ['#F5F5F6', '#F7F7F8', '#EAEBED', '#D5D6DC', '#ACADB9', '#7B7C88'],
  [BLUE_SCALE]: ['#DEECFF', '#C9E0FF', '#B7D6FF', '#92C1FF', '#5E96FC', '#3B7CD3'],
} as unknown as MantineThemeColors;

export default COLORS;
