import { AppShell, Container, useMantineTheme } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { COLORS_KEYS } from '@/constants';
import { useAuthWithPasswordQuery } from '@/services';
import AuthLoader from '@/components/AuthLoader';

export default function Layout() {
  const theme = useMantineTheme();
  const { data, isFetching, isError, error } = useAuthWithPasswordQuery();

  let content = null;

  if (isFetching) {
    content = <AuthLoader />;
  } else if (isError) {
    console.error(error);
  } else if (data) {
    content = (
      <AppShell header={<Header />} padding={0} bg={theme.colors[COLORS_KEYS.GREY_SCALE][1]}>
        <Container size="lg" mt={40}>
          <Outlet />
        </Container>
      </AppShell>
    );
  }

  return content;
}
