import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { AppShell, Container } from '@mantine/core';
import { BG } from './index.constants';

export default function Layout() {
  return (
    <AppShell header={<Header />} padding={0} bg={BG}>
      <Container size="lg" mt={40}>
        <Outlet />
      </Container>
    </AppShell>
  );
}
