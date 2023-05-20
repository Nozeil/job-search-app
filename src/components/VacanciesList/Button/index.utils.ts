import { LS_KEYS } from '@/constants';
import type { HandlerArgs } from './index.types';
import { callFunctionWithFavoriteIds } from '@/utils';

export const effectHandler = ({ id, setIsFavorite }: HandlerArgs) => {
  const favoritesHandler = (parsedIds: number[]) => {
    parsedIds.includes(id) ? setIsFavorite(true) : setIsFavorite(false);
  };
  callFunctionWithFavoriteIds(favoritesHandler);
};

export const clickHandler = (
  { id, setIsFavorite }: HandlerArgs,
  setFavorites?: (ids: number[]) => void
) => {
  const favoritesHandler = (parsedIds: number[]) => {
    const ids = new Set(parsedIds);
    if (ids.has(id)) {
      ids.delete(id);
      setIsFavorite(false);
    } else {
      ids.add(id);
      setIsFavorite(true);
    }
    const resultIds = Array.from(ids);
    if (setFavorites) {
      setFavorites(resultIds);
    }
    localStorage.setItem(LS_KEYS.IDS, JSON.stringify(resultIds));
  };
  callFunctionWithFavoriteIds(favoritesHandler);
};
