import ResetButton from '@/components/ResetButton';
import { Group, Title, rem } from '@mantine/core';

export default function Heading() {
  return (
    <Group spacing={67}>
      <Title size={rem(20)} fw="bold" lh={1}>
        Фильтры
      </Title>
      <ResetButton />
    </Group>
  );
}
