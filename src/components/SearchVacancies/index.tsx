import { Stack } from '@mantine/core';
import SearchBar from './SearchBar';
import { STYLE } from './index.constants';
import VacanciesList from '../VacanciesList';

export default function SearchVacancies() {
  return (
    <Stack style={STYLE}>
      <SearchBar />
      <VacanciesList />
    </Stack>
  );
}
