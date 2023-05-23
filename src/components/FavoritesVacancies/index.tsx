import { Container } from '@mantine/core';
import { useAppSelector } from '@/hooks/redux';
import { selectFavoritesPaginationPage, selectFavoritesCount } from '@/redux/selectors';
import { useSearchVacanciesByIdsQuery } from '@/services/endpoints/searchVacanciesByIds';
import VacanciesList from '../VacanciesList';
import { generateIdsForRequest } from './index.utils';
import FavoritesPagination from './FavoritesPagination';
import useFavoritesIds from '@/hooks/useFavoritesIds';
import AbsoluteLoader from '../AbsoluteLoader';

export default function FavoritesVacancies() {
  const ids = useFavoritesIds();
  const count = useAppSelector(selectFavoritesCount);
  const page = useAppSelector(selectFavoritesPaginationPage);

  const { data, isFetching, isError, error } = useSearchVacanciesByIdsQuery({
    ids: generateIdsForRequest(ids),
    page: page - 1,
    count,
  });

  let content = null;

  if (isFetching) {
    content = <AbsoluteLoader />;
  } else if (isError) {
    console.error(error);
  } else if (data) {
    content = (
      <VacanciesList data={data.objects}>
        <FavoritesPagination total={data.total} />
      </VacanciesList>
    );
  }

  return (
    <Container size="md" p={0}>
      {content}
    </Container>
  );
}
