import { PaginationProps, Pagination as MantinePagination } from '@mantine/core';
import { useStyles } from './index.hooks';
import NextIcon from './Icons/NextIcon';
import PrevIcon from './Icons/PrevIcon';

export default function Pagination({ total, value, onChange, mt }: PaginationProps) {
  const { classes } = useStyles();

  return total > 1 ? (
    <MantinePagination
      classNames={{
        control: classes.control,
      }}
      value={value}
      onChange={onChange}
      total={total}
      position="center"
      mt={mt}
      previousIcon={PrevIcon}
      nextIcon={NextIcon}
    />
  ) : null;
}
