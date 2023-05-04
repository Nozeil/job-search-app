import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Container } from '@mantine/core';

export default function Layout() {
  return (
    <>
      <Header />
      <Container size="lg">
        <Outlet />
      </Container>
    </>
  );
}
