import { Stack, Image, Title, rem } from '@mantine/core';
import empty from '@/assets/empty.svg';
import RedirectButton from '@/components/RedirectButton';

export default function EmptyPage() {
  return (
    <Stack mt={120} spacing={32} align="center">
      <Image src={empty} width={240} height={230} alt="empty" />
      <Title size={rem(24)} fw="bold" align="center" color="#343A40">
        Упс, здесь еще ничего нет!
      </Title>
      <RedirectButton />
    </Stack>
  );
}
