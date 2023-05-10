import { PATHS } from '@/constants';
import { Navbar } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { setActiveLinkStyle } from './index.utils';

interface Props {
  flexDirection: 'row' | 'column';
  gap: number;
  fontSize?: string;
  closeMenu?: () => void;
}

export default function NavMenu({ flexDirection, gap, fontSize, closeMenu }: Props) {
  return (
    <Navbar
      pos="static"
      h="100%"
      withBorder={false}
      fz={fontSize}
      sx={{
        flexDirection,
        justifyContent: 'center',
        alignItems: 'center',
        gap,
      }}
    >
      <NavLink to={PATHS.SEARCH_PAGE} style={setActiveLinkStyle} onClick={closeMenu}>
        Поиск Вакансий
      </NavLink>
      <NavLink to={PATHS.FAVORITES_PAGE} style={setActiveLinkStyle} onClick={closeMenu}>
        Избранное
      </NavLink>
    </Navbar>
  );
}
