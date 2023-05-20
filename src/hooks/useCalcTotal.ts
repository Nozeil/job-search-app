import { useAppSelector } from './redux';
import type { RootState } from '@/redux/store/index.types';

type Selector = (state: RootState) => number;

export const useCalcTotal = (total: number, countSelector: Selector) => {
  const count = useAppSelector(countSelector);
  const maxEntitesCount = 500;
  return total > maxEntitesCount ? Math.ceil(maxEntitesCount / count) : Math.ceil(total / count);
};
