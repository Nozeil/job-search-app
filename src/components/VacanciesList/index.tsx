import { Stack } from '@mantine/core';
import Card from './Card';
import { useSearchVacanciesQuery } from '@/services';
import { useAppDispatch, useAppSelector } from '@/hooks';
import DefaultLoader from '../DefaultLoader';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { RootState } from '@/redux/store/index.types';
import { selectShouldSearch } from '@/redux/selectors';
import { setShouldSearchFalse } from '@/redux/slices/controls';
import Pagination from '../Pagination';

export default function VacanciesList() {
  const shouldSearch = useAppSelector(selectShouldSearch);
  const { controls } = useStore<RootState>().getState();
  const filters = {
    keyword: controls.searchValue,
    from: controls.from,
    to: controls.to,
    catalogues: controls.itemKey,
    count: controls.count,
    page: controls.page,
  };
  const dispatch = useAppDispatch();

  const { data, isFetching, isError, error } = useSearchVacanciesQuery(filters);

  let content = null;

  useEffect(() => {
    if (shouldSearch) {
      dispatch(setShouldSearchFalse());
    }
  }, [dispatch, shouldSearch]);

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
