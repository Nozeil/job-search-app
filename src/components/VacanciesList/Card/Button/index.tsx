import { ActionIcon } from '@mantine/core';
import StarIcon from '../Icons/StarIcon';
import { useStyles } from './index.hooks';

export default function Button() {
  const { classes } = useStyles();
  return (
    <ActionIcon
      className={classes.root}
      variant="transparent"
      pos="absolute"
      top={21}
      right={21}
      w={25}
      h={25}
    >
      <StarIcon className={classes.icon} />
    </ActionIcon>
  );
}
