import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice"
import { userReducer } from "./user/userSlice";
import { favoriteReducer } from "./user/FavoriteSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        user: userReducer,
        favorite:favoriteReducer
    },
    devTools: true,
})