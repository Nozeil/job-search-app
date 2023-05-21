import { Title, TitleProps, rem } from '@mantine/core';

export default function Heading({ children }: TitleProps) {
  return (
    <Title size={rem(28)} weight={700} lh={1.3}>
      {children}
    </Title>
  );
}
