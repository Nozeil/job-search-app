import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchState {
  value: string;
  shouldSearch: boolean;
}

const initialState: SearchState = {
  value: '',
  shouldSearch: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, actionPayload: PayloadAction<string>) => {
      state.value = actionPayload.payload;
      state.shouldSearch = true;
    },
    setShouldSearch: (state, actionPayload: PayloadAction<boolean>) => {
      state.shouldSearch = actionPayload.payload;
    },
  },
});

export const { setSearchValue, setShouldSearch } = searchSlice.actions;

export default searchSlice.reducer;
