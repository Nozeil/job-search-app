import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { NumberInputValue } from '@/types';

interface ControlsState {
  searchValue: string;
  shouldSearch: boolean;
  selectValue: string;
  from: NumberInputValue;
  to: NumberInputValue;
  itemKey: number | null;
}

const initialState: ControlsState = {
  searchValue: '',
  selectValue: '',
  from: '',
  to: '',
  itemKey: null,
  shouldSearch: false,
};

export const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    setSearchValue: (state, actionPayload: PayloadAction<string>) => {
      state.searchValue = actionPayload.payload;
      state.shouldSearch = true;
    },
    setShouldSearch: (state, actionPayload: PayloadAction<boolean>) => {
      state.shouldSearch = actionPayload.payload;
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
    resetFilters: (state) => {
      state.selectValue = '';
      state.from = '';
      state.to = '';
      state.itemKey = null;
      state.shouldSearch = true;
    },
  },
});

export const {
  setSearchValue,
  setShouldSearch,
  setSalaryFrom,
  setSalaryTo,
  setSelectValue,
  setItemKey,
  resetFilters,
} = controlsSlice.actions;
export default controlsSlice.reducer;
