import { PATHS } from '@/constants';
import { Navbar } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { setActiveLinkStyle } from './index.utils';

function NavMenu() {
  return (
    <Navbar
      h="100%"
      withBorder={false}
      sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 60 }}
    >
      <NavLink to={PATHS.SEARCH_PAGE} style={setActiveLinkStyle}>
        Поиск Вакансий
      </NavLink>
      <NavLink to={PATHS.FAVORITES_PAGE} style={setActiveLinkStyle}>
        Избранное
      </NavLink>
    </Navbar>
  );
}

export { NavMenu };
