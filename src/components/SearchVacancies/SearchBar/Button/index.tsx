import { BUTTON_VARIANTS } from '@/constants';
import { Button as MantineButton } from '@mantine/core';
import { MouseEventHandler } from 'react';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ onClick }: Props) {
  return (
    <MantineButton variant={BUTTON_VARIANTS.PRIMARY} h={32} px={20} py={5.5} onClick={onClick}>
      Поиск
    </MantineButton>
  );
}
