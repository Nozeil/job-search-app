import { Stack, Image, Title, rem } from '@mantine/core';
import empty from '@/assets/empty.svg';
import EmptyStateButton from '@/components/EmptyStateButton';

export default function EmptyPage() {
  return (
    <Stack mt={120} spacing={32} align="center">
      <Image src={empty} width={240} height={230} alt="empty" />
      <Title size={rem(24)} fw="bold" align="center" color="#343A40">
        Упс, здесь еще ничего нет!
      </Title>
      <EmptyStateButton />
    </Stack>
  );
}
