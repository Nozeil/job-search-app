import { Stack } from '@mantine/core';
import Industry from './Industry';
import Salary from './Salary';
import ApplyButton from './ApplyButton';

export default function Controls() {
  return (
    <Stack spacing={20}>
      <Industry />
      <Salary />
      <ApplyButton />
    </Stack>
  );
}
