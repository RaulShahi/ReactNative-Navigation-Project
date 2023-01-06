import {createSlice} from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteMealIds: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteMealIds.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.favoriteMealIds.splice(
        state.favoriteMealIds.indexOf(action.payload.id),
        1,
      );
    },
  },
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
