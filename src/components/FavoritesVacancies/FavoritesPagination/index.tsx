import { PaginationProps } from '@mantine/core';
import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { useCalcTotal } from '@/hooks/useCalcTotal';
import { selectFavoritesPaginationPage, selectFavoritesCount } from '@/redux/selectors';
import { setPage } from '@/redux/slices/favorites';
import Pagination from '@/components/Pagination';

export default function FavoritesPagination({ total }: PaginationProps) {
  const calculatedTotal = useCalcTotal(total, selectFavoritesCount);
  const page = useAppSelector(selectFavoritesPaginationPage);
  const dispatch = useAppDispatch();

  const onChange = (page: number) => {
    dispatch(setPage(page));
  };

  return <Pagination total={calculatedTotal} value={page} onChange={onChange} mt={88} />;
}
