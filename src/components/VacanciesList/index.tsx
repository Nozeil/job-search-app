import { useEffect } from 'react';
import { Stack } from '@mantine/core';
import Card from './Card';
import { useSearchVacanciesQuery } from '@/services';
import DefaultLoader from '../DefaultLoader';
import Pagination from '../Pagination';
import Button from './Button';
import { useFilters } from '@/hooks/useFilters';
import { useShouldSearch } from '@/hooks/useShouldSearch';
import { setInitialFavoriteIds } from './index.utils';

export default function VacanciesList() {
  const filters = useFilters();
  useShouldSearch();

  const { data, isFetching, isError, error } = useSearchVacanciesQuery(filters);

  let content = null;

  useEffect(setInitialFavoriteIds, []);

  if (isFetching) {
    content = <DefaultLoader />;
  } else if (isError) {
    console.error(error);
  } else if (data) {
    const cards = data.objects.map((item) => (
      <Card
        key={item.id}
        id={item.id}
        profession={item.profession}
        town={item.town.title}
        typeOfWork={item.type_of_work.title}
        paymentFrom={item.payment_from}
        paymentTo={item.payment_to}
        currency={item.currency}
        button={<Button id={item.id} />}
      />
    ));
    content = (
      <>
        {cards}
        <Pagination total={data.total} />
      </>
    );
  }

  return <Stack spacing={16}>{content}</Stack>;
}
