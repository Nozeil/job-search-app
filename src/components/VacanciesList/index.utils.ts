import { LS_KEYS } from '@/constants';

export const setInitialFavoriteIds = () => {
  const storageIds = localStorage.getItem(LS_KEYS.IDS);

  if (!storageIds) {
    localStorage.setItem(LS_KEYS.IDS, JSON.stringify([]));
  }
};
