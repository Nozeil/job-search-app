import { Button, Stack } from '@mantine/core';
import Heading from './Heading';
import Select from './IndustrySelect';
import Label from './Label';
import { BUTTON_VARIANTS } from '@/constants';
import SalaryInput from './SalaryInput';

export default function Filters() {
  return (
    <Stack spacing={32} p="lg" maw={315}>
      <Heading />
      <Stack spacing={20}>
        <Stack spacing={8}>
          <Label>Отрасль</Label>
          <Select />
        </Stack>
        <Stack spacing={8}>
          <Label>Оклад</Label>
          <SalaryInput placeholder="От" />
          <SalaryInput placeholder="До" />
        </Stack>
        <Button variant={BUTTON_VARIANTS.PRIMARY} h={40}>
          Примeнить
        </Button>
      </Stack>
    </Stack>
  );
}
