import { useEffect } from 'react';
import { selectShouldSearch } from '@/redux/selectors';
import { setShouldSearchFalse } from '@/redux/slices/controls';
import { useAppSelector, useAppDispatch } from './redux';

export const useShouldSearch = () => {
  const shouldSearch = useAppSelector(selectShouldSearch);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (shouldSearch) {
      dispatch(setShouldSearchFalse());
    }
  }, [dispatch, shouldSearch]);
};
