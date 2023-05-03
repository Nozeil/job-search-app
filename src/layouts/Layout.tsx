import { PATHS } from '@/constants';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <nav>
        <NavLink to={PATHS.SEARCH_PAGE}>Search</NavLink>
        <NavLink to={PATHS.FAVORITES_PAGE}>Favorites</NavLink>
        <NavLink to={PATHS.VACANCY_PAGE}>Vacancy</NavLink>
        <NavLink to={PATHS.EMPTY_PAGE}>Empty</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
