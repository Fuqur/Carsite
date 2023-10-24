import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    cart: [],
    isLoading: false,
  },
  reducers: {
    addItemToCart: (state, { payload }) => {
      const { id, title, price } = payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ id, title, price, quantity: 1 });
      }
    },
    removeItemFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload.id);
    },
  },
});

export const { addItemToCart, removeItemFromCart } = userSlice.actions;

export const userReducer = userSlice.reducer;