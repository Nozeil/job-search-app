import { AppShell, Container, MantineTheme } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { COLORS_KEYS } from '@/constants';

const sx = (theme: MantineTheme) => ({ backgroundColor: theme.colors[COLORS_KEYS.GREY_SCALE][1] });

export default function Layout() {
  return (
    <AppShell header={<Header />} padding={0} sx={sx}>
      <Container size="lg" mt={40}>
        <Outlet />
      </Container>
    </AppShell>
  );
}
