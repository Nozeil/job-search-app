import { Box, Stack } from '@mantine/core';
import Heading from './Heading';
import Controls from './Controls';
import { getXsSolidBorderStyles } from '@/utils';
import { useStyles } from './index.hooks';

export default function Filters() {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Stack spacing={32} p="lg" sx={getXsSolidBorderStyles}>
        <Heading />
        <Controls />
      </Stack>
    </Box>
  );
}
