import { Stack, rem, ActionIcon } from '@mantine/core';
import DownIcon from './DownIcon';
import UpIcon from './UpIcon';
import { useStyles } from './index.hooks';

interface Props {
  onUpClick: () => void;
  onDownClick: () => void;
}

export default function Controls({ onUpClick, onDownClick }: Props) {
  const { classes, cx } = useStyles();

  return (
    <Stack align="center" justify="center" spacing={rem(2)}>
      <ActionIcon className={classes.root} variant="transparent" size={12} onClick={onUpClick}>
        <UpIcon className={cx(classes.icon, classes.upIcon)} />
      </ActionIcon>
      <ActionIcon className={classes.root} variant="transparent" size={12} onClick={onDownClick}>
        <DownIcon className={cx(classes.icon, classes.downIcon)} />
      </ActionIcon>
    </Stack>
  );
}
