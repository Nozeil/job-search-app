import { Stack, Button } from '@mantine/core';
import { BUTTON_VARIANTS } from '@/constants';
import Industry from './Industry';
import Salary from './Salary';

export default function Controls() {
  return (
    <Stack spacing={20}>
      <Industry />
      <Salary />
      <Button variant={BUTTON_VARIANTS.PRIMARY} h={40}>
        Примeнить
      </Button>
    </Stack>
  );
}
