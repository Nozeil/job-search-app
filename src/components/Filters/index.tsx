import { MantineTheme, Stack } from '@mantine/core';
import Heading from './Heading';
import Controls from './Controls';
import { COLORS_KEYS } from '@/constants';

const sx = (theme: MantineTheme) => ({
  border: `1px solid ${theme.colors[COLORS_KEYS.GREY_SCALE][2]}`,
  borderRadius: 8,
});

export default function Filters() {
  return (
    <Stack spacing={32} p="lg" maw={315} sx={sx}>
      <Heading />
      <Controls />
    </Stack>
  );
}
