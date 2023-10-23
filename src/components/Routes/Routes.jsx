import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import { ROUTES } from "../../utils/routes";
import SingleProduct from "../Products/SingleProduct";
import Cart from "../Cart/Cart";

const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={ROUTES.CATEGORY} element={<SingleProduct />} />
    <Route path={ROUTES.CART} element={<Cart />} />
  </Routes>
);

export default AppRoutes;