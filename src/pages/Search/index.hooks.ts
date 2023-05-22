import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  box: {
    display: 'grid',
    gridTemplateAreas: '"filters search" "filters vacancies"',
    gridTemplateColumns: 'max-content 1fr',
    rowGap: theme.spacing.md,
    columnGap: 28,

    [theme.fn.smallerThan('sm')]: {
      gridTemplateAreas: '"search" "filters" "vacancies"',
      gridTemplateColumns: '1fr',
    },
  },

  filters: {
    gridArea: 'filters',
  },

  search: {
    gridArea: 'search',
  },

  vacancies: {
    gridArea: 'vacancies',
  },
}));
