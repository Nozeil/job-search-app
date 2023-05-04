import { Group, Title, Image } from '@mantine/core';

export function Logo() {
  return (
    <Group pos="absolute" top="50%" spacing={12} sx={{ transform: 'translate(0, -50%)' }}>
      <Image width={30} height={30} src="./logo.svg " alt="logo" />
      <Title size="24" ff={'Poppins'} fw={600} lts={-0.02}>
        Jobored
      </Title>
    </Group>
  );
}
