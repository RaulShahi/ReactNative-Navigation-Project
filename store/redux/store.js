import {configureStore} from '@reduxjs/toolkit';
import {favoritesSlice} from './favorite-slice';

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesSlice.reducer,
  },
});
