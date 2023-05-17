import { PropsWithChildren, memo } from 'react';
import { Title } from '@mantine/core';

const Label = memo(function Label({ children }: PropsWithChildren) {
  return (
    <Title size="h5" fw="bold" lh="1.15">
      {children}
    </Title>
  );
});

export default Label;
