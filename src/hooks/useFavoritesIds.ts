import { useEffect } from 'react';
import { selectIds } from '@/redux/selectors';
import { setIds } from '@/redux/slices/favorites';
import { callFunctionWithFavoriteIds } from '@/utils';
import { useAppDispatch, useAppSelector } from './redux';

export default function useFavoritesIds() {
  const ids = useAppSelector(selectIds);
  const dispatch = useAppDispatch();

  useEffect(() => {
    callFunctionWithFavoriteIds((ids) => dispatch(setIds(ids)));
  }, [dispatch]);

  return ids;
}
