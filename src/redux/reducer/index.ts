import { combineReducers } from '@reduxjs/toolkit';
import controlsReducer from '../slices/controls';
import favoritesReducer from '../slices/favorites';
import { api } from '@/services';

const rootReducer = combineReducers({
  controls: controlsReducer,
  favorites: favoritesReducer,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
