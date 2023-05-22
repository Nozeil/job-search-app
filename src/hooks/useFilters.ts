import { RootState } from '@/redux/store/index.types';
import { useStore } from 'react-redux';

export const useFilters = () => {
  const { controls } = useStore<RootState>().getState();
  const filters = {
    keyword: controls.searchQueryValue,
    from: controls.from,
    to: controls.to,
    catalogues: controls.itemKey,
    count: controls.count,
    page: controls.page - 1,
  };

  return filters;
};
