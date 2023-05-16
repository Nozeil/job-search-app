import { COLORS_KEYS } from '@/constants';
import { Loader, Stack, useMantineTheme } from '@mantine/core';

export default function DefaultLoader() {
  const theme = useMantineTheme();

  return (
    <Stack align="center">
      <Loader variant="bars" color={theme.colors[COLORS_KEYS.BLUE_SCALE][4]} />
    </Stack>
  );
}
