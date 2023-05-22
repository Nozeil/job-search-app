import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { NumberInputValue } from '@/types';

interface ControlsState {
  searchValue: string;
  searchQueryValue: string;
  shouldSearch: boolean;
  selectValue: string;
  from: NumberInputValue;
  to: NumberInputValue;
  itemKey: number | null;
  page: number;
  count: number;
}

const initialState: ControlsState = {
  searchValue: '',
  searchQueryValue: '',
  selectValue: '',
  from: '',
  to: '',
  itemKey: null,
  shouldSearch: false,
  page: 1,
  count: 4,
};

export const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    setSearchValue: (state, actionPayload: PayloadAction<string>) => {
      state.searchValue = actionPayload.payload;
    },
    setSearchData: (state, actionPayload: PayloadAction<string>) => {
      state.searchQueryValue = actionPayload.payload;
      state.page = 1;
      state.shouldSearch = true;
    },
    setShouldSearchTrue: (state) => {
      state.searchQueryValue = state.searchValue;
      state.page = 1;
      state.shouldSearch = true;
    },
    setShouldSearchFalse: (state) => {
      state.shouldSearch = false;
    },
    setSelectValue: (state, actionPayload: PayloadAction<string>) => {
      state.selectValue = actionPayload.payload;
    },
    setItemKey: (state, actionPayload: PayloadAction<number>) => {
      state.itemKey = actionPayload.payload;
    },
    setSalaryFrom: (state, actionPayload: PayloadAction<NumberInputValue>) => {
      state.from = actionPayload.payload;
    },
    setSalaryTo: (state, actionPayload: PayloadAction<NumberInputValue>) => {
      state.to = actionPayload.payload;
    },
    setPage: (state, actionPayload: PayloadAction<number>) => {
      state.page = actionPayload.payload;
      state.shouldSearch = true;
    },
    resetFilters: (state) => {
      state.selectValue = '';
      state.from = '';
      state.to = '';
      state.itemKey = null;
      state.shouldSearch = true;
      state.page = 1;
    },
    resetControls: (state) => {
      state.searchValue = '';
      state.selectValue = '';
      state.from = '';
      state.to = '';
      state.itemKey = null;
      state.shouldSearch = true;
      state.page = 1;
    },
  },
});

export const {
  setSearchValue,
  setSearchData,
  setShouldSearchTrue,
  setShouldSearchFalse,
  setSalaryFrom,
  setSalaryTo,
  setSelectValue,
  setItemKey,
  setPage,
  resetFilters,
  resetControls,
} = controlsSlice.actions;
export default controlsSlice.reducer;
