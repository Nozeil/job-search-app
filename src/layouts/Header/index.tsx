import { Container, Header as MantineHeader } from '@mantine/core';
import Logo from '@/components/Logo';
import { SIZES } from '@/constants';
import NavMenu from '@/components/NavMenu';

export default function Header() {
  return (
    <MantineHeader height={SIZES.HEADER_HEIGHT}>
      <Container pos="relative" h="100%" size="lg">
        <Logo />
        <NavMenu />
      </Container>
    </MantineHeader>
  );
}
