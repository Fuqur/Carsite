import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    currentUser: null,
    favorite: [],
    isLoading: false,
  },
  reducers: {
    addToFavorite: (state, { payload }) => {
      const { id, title, price } = payload;
      const existingItem = state.favorite.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.favorite.push({ id, title, price, quantity: 1 });
      }
    },
    removeFromFavorite: (state, { payload }) => {
      state.favorite = state.favorite.filter((item) => item.id !== payload.id);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;