import { Stack } from '@mantine/core';
import Card from './Card';
import { useSearchVacanciesQuery } from '@/services';
import { useAppSelector } from '@/hooks';
import { selectSearchValue } from '@/redux/slices';
import DefaultLoader from '../DefaultLoader';

export default function VacanciesList() {
  const value = useAppSelector(selectSearchValue);
  const { data, isFetching, isError, error } = useSearchVacanciesQuery(value);

  let content = null;

  if (isFetching) {
    content = <DefaultLoader />;
  } else if (isError) {
    console.error(error);
  } else if (data) {
    content = data.objects.map((item) => (
      <Card
        key={item.id}
        id={item.id}
        profession={item.profession}
        town={item.town.title}
        typeOfWork={item.type_of_work.title}
        paymentFrom={item.payment_from}
        paymentTo={item.payment_to}
        currency={item.currency}
      />
    ));
  }

  return <Stack spacing={16}>{content}</Stack>;
}
