import { useAppDispatch, useAppSelector, useCalcTotal } from '@/hooks';
import { selectPage } from '@/redux/selectors';
import { setPage } from '@/redux/slices/controls';
import { PaginationProps, Pagination as MantinePagination } from '@mantine/core';
import { useStyles } from './index.hooks';
import NextIcon from './Icons/NextIcon';
import PrevIcon from './Icons/PrevIcon';

export default function Pagination({ total }: PaginationProps) {
  const calculatedTotal = useCalcTotal(total);
  const page = useAppSelector(selectPage);
  const dispatch = useAppDispatch();
  const { classes } = useStyles();

  const onChange = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <MantinePagination
      classNames={{
        control: classes.control,
      }}
      value={page}
      onChange={onChange}
      total={calculatedTotal}
      position="center"
      mt={24}
      previousIcon={PrevIcon}
      nextIcon={NextIcon}
    />
  );
}
