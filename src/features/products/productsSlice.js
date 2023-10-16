import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk ('products/getProducts',async(_,thunkAPI )=> {try{
const res = await axios(`list`);
return res.data;

} catch(err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err);
}
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
      list: [],
      cart: [],
      isLoading: false,
    },
    reducers: {
      addToCart: (state, action) => {
        state.cart.push(action.payload);
      },
    },
    extraReducers: (builder) => {
      builder.addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getProducts.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.isLoading = false;
      });
      builder.addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
      });
    },
  });
  
  export const { addToCart } = productsSlice.actions;
  export default productsSlice.reducer;