import { RootState } from '@/redux/store/index.types';
import { useStore } from 'react-redux';

export const useFilters = () => {
  const { controls } = useStore<RootState>().getState();
  const filters = {
    keyword: controls.searchQueryValue,
    from: controls.fromQueryValue,
    to: controls.toQueryValue,
    catalogues: controls.itemKeyQueryValue,
    count: controls.count,
    page: controls.page - 1,
  };

  return filters;
};
