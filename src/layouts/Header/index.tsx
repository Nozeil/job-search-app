import { Logo } from '@/components/Logo';
import { NavMenu } from '@/components/NavMenu';
import { Container, Header as MantineHeader } from '@mantine/core';

export default function Header() {
  return (
    <MantineHeader height={84} mb={40}>
      <Container pos="relative" h="100%" size="lg">
        <Logo />
        <NavMenu />
      </Container>
    </MantineHeader>
  );
}
