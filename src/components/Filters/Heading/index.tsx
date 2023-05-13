import { Group, Title, rem } from '@mantine/core';
import ResetButton from './ResetButton';

export default function Heading() {
  return (
    <Group spacing={66}>
      <Title size={rem(20)} fw="bold" lh={1}>
        Фильтры
      </Title>
      <ResetButton />
    </Group>
  );
}
