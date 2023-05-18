import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { NumberInputValue } from '@/types';

interface ControlsState {
  searchValue: string;
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
      state.page = 1;
      state.shouldSearch = true;
    },
    setShouldSearchTrue: (state) => {
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
  },
});

export const {
  setSearchValue,
  setShouldSearchTrue,
  setShouldSearchFalse,
  setSalaryFrom,
  setSalaryTo,
  setSelectValue,
  setItemKey,
  setPage,
  resetFilters,
} = controlsSlice.actions;
export default controlsSlice.reducer;
