import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { useCalcTotal } from '@/hooks/useCalcTotal';
import { selectSearchCount, selectSearchPaginationPage } from '@/redux/selectors';
import { setPage } from '@/redux/slices/controls';
import Pagination from '../../Pagination';
import { type PaginationProps } from '@mantine/core';

export default function SearchPagination({ total }: PaginationProps) {
  const calculatedTotal = useCalcTotal(total, selectSearchCount);
  const page = useAppSelector(selectSearchPaginationPage);
  const dispatch = useAppDispatch();

  const onChange = (page: number) => {
    dispatch(setPage(page));
  };

  return <Pagination total={calculatedTotal} value={page} onChange={onChange} mt={24} />;
}
