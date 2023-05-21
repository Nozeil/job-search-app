import { useLayoutEffect, useMemo, useState } from 'react';
import { ActionIcon } from '@mantine/core';
import StarIcon from '../Card/Icons/StarIcon';
import { useStyles } from './index.hooks';
import { effectHandler, clickHandler } from './index.utils';
import { useAppDispatch } from '@/hooks/redux';
import { setIds, setIdsAndPage } from '@/redux/slices/favorites';
import { useLocation } from 'react-router-dom';
import { PATHS } from '@/constants';

interface Props {
  id: number;
}

export default function Button({ id }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { classes } = useStyles(isFavorite);
  const dispatch = useAppDispatch();
  const handlerArgs = useMemo(() => ({ id, setIsFavorite }), [id]);
  const location = useLocation();

  useLayoutEffect(() => effectHandler(handlerArgs), [handlerArgs]);

  const onClick = () => {
    location.pathname === PATHS.FAVORITES_PAGE
      ? clickHandler(handlerArgs, (ids) => dispatch(setIdsAndPage(ids)))
      : clickHandler(handlerArgs, (ids) => dispatch(setIds(ids)));
  };

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
