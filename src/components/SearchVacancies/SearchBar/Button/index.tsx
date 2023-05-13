import { BUTTON_VARIANTS } from '@/constants';
import { Button as MantineButton } from '@mantine/core';

export default function Button() {
  return (
    <MantineButton variant={BUTTON_VARIANTS.PRIMARY} h={32} px={20} py={5.5}>
      Поиск
    </MantineButton>
  );
}
