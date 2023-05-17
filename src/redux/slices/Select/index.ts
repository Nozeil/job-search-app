import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
export default selectSlice.reducer;
