import { selectCount } from '@/redux/selectors';
import { AppDispatch, RootState } from '@/redux/store/index.types';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCalcTotal = (total: number) => {
  const count = useAppSelector(selectCount);
  const maxEntitesCount = 500;
  return total > maxEntitesCount
    ? Math.ceil(maxEntitesCount / count)
    : Math.ceil(total / count) - 1;
};
