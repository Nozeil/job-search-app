import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/index.types';
import type { NumberInputValue } from '@/components/Filters/Controls/Salary/index.types';

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
export const selectSalary = (state: RootState) => state.salary;
export default salarySlice.reducer;
