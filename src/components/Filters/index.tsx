import { Stack } from '@mantine/core';
import Heading from './Heading';
import Select from './Select';

export default function Filters() {
  return (
    <Stack spacing={32} p="lg" maw={315}>
      <Heading />
      <Select />
    </Stack>
  );
}
