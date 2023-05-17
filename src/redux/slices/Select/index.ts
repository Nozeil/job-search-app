import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/index.types';

interface SelectState {
  value: string;
  itemKey: number | null;
}

const initialState: SelectState = {
  value: '',
  itemKey: null,
};

export const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    setSelectValue: (state, actionPayload: PayloadAction<string>) => {
      state.value = actionPayload.payload;
    },
    setItemKey: (state, actionPayload: PayloadAction<number>) => {
      state.itemKey = actionPayload.payload;
    },
  },
});

export const { setSelectValue, setItemKey } = selectSlice.actions;
export const getSelectValue = (state: RootState) => state.select.value;
export const selectItemKey = (state: RootState) => state.select.value;
export default selectSlice.reducer;
