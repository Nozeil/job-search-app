import { FONTS } from '@/constants';
import { Group, Title, Image, rem } from '@mantine/core';

export default function Logo() {
  return (
    <Group pos="absolute" top="50%" spacing={12} sx={{ transform: 'translate(0, -50%)' }}>
      <Image width={30} height={30} src="/logo.svg" alt="logo" />
      <Title size={rem(24)} ff={FONTS.PRIMARY} fw={600} lts={-0.02}>
        Jobored
      </Title>
    </Group>
  );
}
