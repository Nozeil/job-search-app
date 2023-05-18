import { combineReducers } from '@reduxjs/toolkit';
import controlsReducer from '../slices/controls';
import { api } from '@/services';

const rootReducer = combineReducers({
  controls: controlsReducer,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
