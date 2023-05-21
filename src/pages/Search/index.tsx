import Filters from '@/components/Filters';
import SearchVacancies from '@/components/SearchVacancies';
import SearchBar from '@/components/SearchVacancies/SearchBar';
import useSmallScreenMediaQuery from '@/hooks/useSmallScreenMediaQuery';
import { Flex } from '@mantine/core';

export default function Search() {
  const { isSmallScreen, component: topComponent } = useSmallScreenMediaQuery(
    <Filters />,
    <SearchBar />
  );

  return (
    <Flex
      gap={28}
      sx={{
        flexDirection: isSmallScreen ? 'column' : 'row',
      }}
    >
      {topComponent}
      <SearchVacancies />
    </Flex>
  );
}
