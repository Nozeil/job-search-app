import { Button } from '@mantine/core';
import ResetIcon from '../Icons/ResetIcon';
import { useStyles } from './index.hooks';
import { useAppDispatch } from '@/hooks';
import { resetFilters } from '@/redux/slices/controls';

export default function ResetButton() {
  const dispatch = useAppDispatch();
  const { classes } = useStyles();

  const onClick = () => {
    dispatch(resetFilters());
  };

  return (
    <Button
      variant="default"
      classNames={{
        root: classes.root,
        rightIcon: classes.rightIcon,
      }}
      type="reset"
      rightIcon={<ResetIcon className={classes.icon} />}
      onClick={onClick}
    >
      Сбросить все
    </Button>
  );
}
