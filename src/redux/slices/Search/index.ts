import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/index.types';

interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, actionPayload: PayloadAction<string>) => {
      state.value = actionPayload.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;
export const selectSearchValue = (state: RootState) => state.search.value;
export default searchSlice.reducer;
