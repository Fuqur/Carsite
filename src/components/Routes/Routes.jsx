import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import { ROUTES } from "../../utils/routes";
import SingleProduct from "../Products/SingleProduct";
import Cart from "../Cart/Cart";
import Favorite from "../Favorite/Favorite.jsx";

const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={ROUTES.CATEGORY} element={<SingleProduct />} />
    <Route path={ROUTES.CART} element={<Cart />} />
    <Route path={ROUTES.FAVORITE} element={<Favorite />} />
  </Routes>
);

export default AppRoutes;