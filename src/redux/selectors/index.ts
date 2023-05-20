import type { RootState } from '../store/index.types';

export const selectSalaryFrom = (state: RootState) => state.controls.from;

export const selectSalaryTo = (state: RootState) => state.controls.to;

export const selectSearchValue = (state: RootState) => state.controls.searchValue;

export const selectShouldSearch = (state: RootState) => state.controls.shouldSearch;

export const getSelectValue = (state: RootState) => state.controls.selectValue;

export const getSelectItemKey = (state: RootState) => state.controls.itemKey;

export const selectSearchCount = (state: RootState) => state.controls.count;

export const selectFavoritesCount = (state: RootState) => state.favorites.count;

export const selectSearchPaginationPage = (state: RootState) => state.controls.page;

export const selectFavoritesPaginationPage = (state: RootState) => state.favorites.page;

export const selectIds = (state: RootState) => state.favorites.ids;
