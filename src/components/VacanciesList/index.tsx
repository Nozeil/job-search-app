import { Stack } from '@mantine/core';
import Card from './Card';
import { useSearchVacanciesQuery } from '@/services';
import { useAppDispatch, useAppSelector } from '@/hooks';
import DefaultLoader from '../DefaultLoader';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { RootState } from '@/redux/store/index.types';
import { selectShouldSearch } from '@/redux/selectors';
import { setShouldSearch } from '@/redux/slices/controls';

export default function VacanciesList() {
  const shouldSearch = useAppSelector(selectShouldSearch);
  const state = useStore<RootState>().getState();
  const filters = {
    keyword: state.controls.searchValue,
    from: state.controls.from,
    to: state.controls.to,
    catalogues: state.controls.itemKey,
  };
  const dispatch = useAppDispatch();

  const { data, isFetching, isError, error } = useSearchVacanciesQuery(filters);

  let content = null;

  useEffect(() => {
    if (shouldSearch) {
      dispatch(setShouldSearch(false));
    }
  }, [dispatch, shouldSearch]);

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
