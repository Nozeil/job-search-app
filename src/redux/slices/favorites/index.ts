import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FavoritesState {
  ids: number[];
  page: number;
  count: number;
}

const initialState: FavoritesState = {
  ids: [],
  page: 1,
  count: 4,
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setIds: (state, actionPayload: PayloadAction<number[]>) => {
      state.ids = actionPayload.payload;
    },
    setIdsAndPage: (state, actionPayload: PayloadAction<number[]>) => {
      const ids = actionPayload.payload;
      const page = state.page;
      if (!(ids.length % state.count) && page !== 1) {
        state.page = page - 1;
      }
      state.ids = ids;
    },
    setPage: (state, actionPayload: PayloadAction<number>) => {
      state.page = actionPayload.payload;
    },
  },
});

export const { setIds, setPage, setIdsAndPage } = favoritesSlice.actions;
export default favoritesSlice.reducer;
