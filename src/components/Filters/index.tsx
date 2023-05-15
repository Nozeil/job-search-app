import { Box, Stack } from '@mantine/core';
import Heading from './Heading';
import Controls from './Controls';
import { getXsSolidBorderStyles } from '@/utils';

export default function Filters() {
  return (
    <Box maw={315}>
      <Stack spacing={32} p="lg" sx={getXsSolidBorderStyles}>
        <Heading />
        <Controls />
      </Stack>
    </Box>
  );
}
