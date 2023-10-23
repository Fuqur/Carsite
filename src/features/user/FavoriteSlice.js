import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, { payload }) => {
      const { id, title, price } = payload;
      const existingFavorite = state.favorites.find((item) => item.id === id);

      if (!existingFavorite) {
        state.favorites.push({ id, title, price });
      }
    },
    removeFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter((item) => item.id !== payload.id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;