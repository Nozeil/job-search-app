import { useGetIndustryCatalogQuery } from '@/services/endpoints/getIndustryCatalog';
import { useMemo } from 'react';
import { adaptData } from './index.utils';
import Select from '../Select';
import Loader from './Loader';
import Item from './Item';

export default function SelectWithQuery() {
  const { data, isFetching, isError, error } = useGetIndustryCatalogQuery();

  const adaptedData = useMemo(() => adaptData(data), [data]);
  const itemComponent = isFetching ? Loader : Item;

  if (isError) {
    console.error(error);
  }

  return <Select data={adaptedData} itemComponent={itemComponent} />;
}
