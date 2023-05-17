import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { NumberInputValue } from '@/types';

interface SalaryState {
  from: NumberInputValue;
  to: NumberInputValue;
}

const initialState: SalaryState = {
  from: '',
  to: '',
};

export const salarySlice = createSlice({
  name: 'salary',
  initialState,
  reducers: {
    setSalaryFrom: (state, actionPayload: PayloadAction<NumberInputValue>) => {
      state.from = actionPayload.payload;
    },
    setSalaryTo: (state, actionPayload: PayloadAction<NumberInputValue>) => {
      state.to = actionPayload.payload;
    },
  },
});

export const { setSalaryFrom, setSalaryTo } = salarySlice.actions;
export default salarySlice.reducer;
