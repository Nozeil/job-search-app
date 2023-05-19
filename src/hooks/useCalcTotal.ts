import { selectCount } from '@/redux/selectors';
import { useAppSelector } from './redux';

export const useCalcTotal = (total: number) => {
  const count = useAppSelector(selectCount);
  const maxEntitesCount = 500;
  return total > maxEntitesCount
    ? Math.ceil(maxEntitesCount / count)
    : Math.ceil(total / count) - 1;
};
