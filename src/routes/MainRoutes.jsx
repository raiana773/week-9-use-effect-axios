import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HommePage from "../pages/HommePage";
import ProductPage from "../pages/ProductPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HommePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
