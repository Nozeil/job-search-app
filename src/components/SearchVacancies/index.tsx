import { Stack } from '@mantine/core';
import SearchBar from './SearchBar';
import { STYLE } from './index.constants';

export default function SearchVacancies() {
  return (
    <Stack style={STYLE}>
      <SearchBar />
    </Stack>
  );
}
