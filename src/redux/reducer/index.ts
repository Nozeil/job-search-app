import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from '../slices/search';
import selectReducer from '../slices/select';
import salaryReducer from '../slices/salary';
import { api } from '@/services';

const rootReducer = combineReducers({
  search: searchReducer,
  select: selectReducer,
  salary: salaryReducer,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
