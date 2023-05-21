import { Box, Stack } from '@mantine/core';
import Heading from './Heading';
import Controls from './Controls';
import { getXsSolidBorderStyles } from '@/utils';
import useSmallScreenMediaQuery from '@/hooks/useSmallScreenMediaQuery';

export default function Filters() {
  const { isSmallScreen } = useSmallScreenMediaQuery();
  const maw = isSmallScreen ? undefined : 315;

  return (
    <Box maw={maw}>
      <Stack spacing={32} p="lg" sx={getXsSolidBorderStyles}>
        <Heading />
        <Controls />
      </Stack>
    </Box>
  );
}
