import Layout from '@/layouts/Layout';
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import SearchPage from '@/pages/Search';
import FavoritesPage from '@/pages/Favorites';
import EmptyPage from '@/pages/Empty';
import { PATHS } from '@/constants';
import VacancyPage from '@/pages/Vacancy';

const routes = createRoutesFromElements(
  <Route element={<Layout />} errorElement={<Navigate to={PATHS.EMPTY_PAGE} replace />}>
    <Route index path={PATHS.SEARCH_PAGE} element={<SearchPage />} />
    <Route path={PATHS.FAVORITES_PAGE} element={<FavoritesPage />} />
    <Route path={`${PATHS.VACANCY_PAGE}/:id`} element={<VacancyPage />} />
    <Route path={PATHS.EMPTY_PAGE} element={<EmptyPage />} />
  </Route>
);

const router = createBrowserRouter(routes);

export default router;
