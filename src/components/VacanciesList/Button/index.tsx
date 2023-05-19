import { useEffect, useMemo, useState } from 'react';
import { ActionIcon } from '@mantine/core';
import StarIcon from '../Card/Icons/StarIcon';
import { useStyles } from './index.hooks';
import { effectHandler, clickHandler } from './index.utils';

interface Props {
  id: number;
}

export default function Button({ id }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { classes } = useStyles(isFavorite);
  const handlerArgs = useMemo(() => ({ id, setIsFavorite }), [id]);

  useEffect(() => effectHandler(handlerArgs), [handlerArgs]);

  const onClick = () => clickHandler(handlerArgs);

  return (
    <ActionIcon
      className={classes.root}
      variant="transparent"
      pos="absolute"
      top={21}
      right={21}
      w={25}
      h={25}
      onClick={onClick}
    >
      <StarIcon className={classes.icon} />
    </ActionIcon>
  );
}
