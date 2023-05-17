import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { api } from '@/services';
import searchReducer from '../slices/Search';
import selectReducer from '../slices/Select';
import salaryReducer from '../slices/Salary';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    select: selectReducer,
    salary: salaryReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
