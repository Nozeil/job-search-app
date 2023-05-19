import { LS_KEYS } from '@/constants';
import { HandlerArgs } from './index.types';

export const callFunctionWithFavoriteIds = <T extends Array<number>>(foo: (arg: T) => void) => {
  const storageIds = localStorage.getItem(LS_KEYS.IDS);
  if (storageIds) {
    const parsedIds = JSON.parse(storageIds);
    if (parsedIds instanceof Array) {
      if (parsedIds.every((item) => typeof item === 'number')) {
        foo(parsedIds as T);
      }
    }
  }
};

export const effectHandler = ({ id, setIsFavorite }: HandlerArgs) => {
  const favoriteHandler = (parsedIds: number[]) => {
    parsedIds.includes(id) ? setIsFavorite(true) : setIsFavorite(false);
  };
  callFunctionWithFavoriteIds(favoriteHandler);
};

export const clickHandler = ({ id, setIsFavorite }: HandlerArgs) => {
  const favoriteHandler = (parsedIds: number[]) => {
    const ids = new Set(parsedIds);
    if (ids.has(id)) {
      ids.delete(id);
      setIsFavorite(false);
    } else {
      ids.add(id);
      setIsFavorite(true);
    }
    localStorage.setItem(LS_KEYS.IDS, JSON.stringify(Array.from(ids)));
  };
  callFunctionWithFavoriteIds(favoriteHandler);
};
