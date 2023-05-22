import VacanciesList from '../VacanciesList';
import { useFilters } from '@/hooks/useFilters';
import { useShouldSearch } from '@/hooks/useShouldSearch';
import { useSearchVacanciesQuery } from '@/services';
import DefaultLoader from '../DefaultLoader';
import SearchPagination from './SearchPagination';

export default function Vacancies() {
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

  return content;
}
