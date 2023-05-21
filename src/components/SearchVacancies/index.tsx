import { Stack } from '@mantine/core';
import SearchBar from './SearchBar';
import { STYLE } from './index.constants';
import VacanciesList from '../VacanciesList';
import { useFilters } from '@/hooks/useFilters';
import { useShouldSearch } from '@/hooks/useShouldSearch';
import { useSearchVacanciesQuery } from '@/services';
import DefaultLoader from '../DefaultLoader';
import SearchPagination from './SearchPagination';
import Filters from '../Filters';
import useSmallScreenMediaQuery from '@/hooks/useSmallScreenMediaQuery';

export default function SearchVacancies() {
  const { component: topComponent } = useSmallScreenMediaQuery(<SearchBar />, <Filters />);
  const filters = useFilters();
  useShouldSearch();

  const { data, isFetching, isError, error } = useSearchVacanciesQuery(filters);

  let content = null;

  if (isFetching) {
    content = <DefaultLoader />;
  } else if (isError) {
    console.error(error);
  } else if (data) {
    content = (
      <VacanciesList data={data.objects}>
        <SearchPagination total={data.total} />
      </VacanciesList>
    );
  }

  return (
    <Stack style={STYLE}>
      {topComponent}
      {content}
    </Stack>
  );
}
