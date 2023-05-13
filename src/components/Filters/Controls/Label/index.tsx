import { Title } from '@mantine/core';
import { PropsWithChildren } from 'react';

export default function Label({ children }: PropsWithChildren) {
  return (
    <Title size="h5" fw="bold" lh="1.2">
      {children}
    </Title>
  );
}
