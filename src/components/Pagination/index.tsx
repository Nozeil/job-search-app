import { PaginationProps, Pagination as MantinePagination } from '@mantine/core';
import { useStyles } from './index.hooks';
import NextIcon from './Icons/NextIcon';
import PrevIcon from './Icons/PrevIcon';
import useSmallScreenMediaQuery from '@/hooks/useSmallScreenMediaQuery';

export default function Pagination({ total, value, onChange, mt }: PaginationProps) {
  const { isSmallScreen } = useSmallScreenMediaQuery();
  const { siblings, spacing } = isSmallScreen
    ? { siblings: 0, spacing: 4 }
    : { siblings: 1, spacing: 'md' };

  const { classes } = useStyles();

  return total > 1 ? (
    <MantinePagination
      classNames={{
        control: classes.control,
      }}
      value={value}
      onChange={onChange}
      siblings={siblings}
      spacing={spacing}
      total={total}
      position="center"
      mt={mt}
      previousIcon={PrevIcon}
      nextIcon={NextIcon}
    />
  ) : null;
}
