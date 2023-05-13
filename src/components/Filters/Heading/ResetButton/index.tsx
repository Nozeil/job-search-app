import { Button } from '@mantine/core';
import ResetIcon from '../Icons/ResetIcon';
import { useStyles } from './index.hooks';

export default function ResetButton() {
  const { classes } = useStyles();

  return (
    <Button
      variant="default"
      classNames={{
        root: classes.root,
        rightIcon: classes.rightIcon,
      }}
      type="reset"
      rightIcon={<ResetIcon className={classes.icon} />}
    >
      Сбросить все
    </Button>
  );
}
