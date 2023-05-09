import { Container, Header as MantineHeader } from '@mantine/core';
import Logo from '@/components/Logo';
import ResponsiveNav from '@/components/ResponsiveNav';
import { SIZES } from '@/constants';

export default function Header() {
  return (
    <MantineHeader height={SIZES.HEADER_HEIGHT} mb={40}>
      <Container pos="relative" h="100%" size="lg">
        <Logo />
        <ResponsiveNav />
      </Container>
    </MantineHeader>
  );
}
