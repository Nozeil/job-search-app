import type { RootState } from '../store/index.types';

export const selectSalary = (state: RootState) => state.salary;

export const selectSearchValue = (state: RootState) => state.search.value;

export const selectShouldSearch = (state: RootState) => state.search.shouldSearch;

export const getSelectValue = (state: RootState) => state.select.value;

export const getSelectItemKey = (state: RootState) => state.select.itemKey;
