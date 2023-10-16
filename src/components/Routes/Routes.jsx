import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import { ROUTES } from "../../utils/routes";
import SingleProduct from "../Products/SingleProduct";

const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={ROUTES.CATEGORY} element={<SingleProduct />} />
  </Routes>
);

export default AppRoutes;