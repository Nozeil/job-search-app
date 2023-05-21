import { type PropsWithChildren, useEffect } from 'react';
import { Stack } from '@mantine/core';
import Card from './Card';
import Button from './Button';
import { setInitialFavoriteIds } from './index.utils';
import { Vacancys } from '@/models';
import useEmptyStateRedirect from '@/hooks/useEmptyStateRedirect';

interface Props {
  data: Vacancys;
}

export default function VacanciesList({ data, children }: PropsWithChildren<Props>) {
  useEmptyStateRedirect(data);
  useEffect(setInitialFavoriteIds, []);

  const cards = data.map((item) => (
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

  return (
    <Stack spacing={16}>
      {cards}
      {children}
    </Stack>
  );
}
