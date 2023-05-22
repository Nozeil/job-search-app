import Filters from '@/components/Filters';
import SearchVacancies from '@/components/SearchVacancies';
import SearchBar from '@/components/SearchBar';
import { Box } from '@mantine/core';
import { useStyles } from './index.hooks';

export default function Search() {
  const { classes } = useStyles();

  return (
    <Box className={classes.box}>
      <Box className={classes.filters}>
        <Filters />
      </Box>
      <Box className={classes.search}>
        <SearchBar />
      </Box>
      <Box className={classes.vacancies}>
        <SearchVacancies />
      </Box>
    </Box>
  );
}
