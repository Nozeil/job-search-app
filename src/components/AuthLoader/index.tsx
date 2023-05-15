import { COLORS_KEYS } from '@/constants';
import { useMantineTheme, LoadingOverlay } from '@mantine/core';

export default function AuthLoader() {
  const theme = useMantineTheme();

  return (
    <LoadingOverlay
      visible
      loaderProps={{
        size: 'xl',
        color: theme.colors[COLORS_KEYS.BLUE_SCALE][4],
        variant: 'dots',
      }}
    />
  );
}
