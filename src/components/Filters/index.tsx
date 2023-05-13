import { MantineTheme, Stack } from '@mantine/core';
import Heading from './Heading';
import Controls from './Controls';
import { COLORS_KEYS } from '@/constants';

const sx = (theme: MantineTheme) => ({
  flexBasis: 315,
  border: `1px solid ${theme.colors[COLORS_KEYS.GREY_SCALE][2]}`,
  borderRadius: 12,
});

export default function Filters() {
  return (
    <Stack spacing={32} p="lg" sx={sx}>
      <Heading />
      <Controls />
    </Stack>
  );
}
