import Filters from '@/components/Filters';
import SearchVacancies from '@/components/SearchVacancies';
import { Flex, rem } from '@mantine/core';

export default function Search() {
  return (
    <Flex gap={rem(28)}>
      <Filters />
      <SearchVacancies />
    </Flex>
  );
}
