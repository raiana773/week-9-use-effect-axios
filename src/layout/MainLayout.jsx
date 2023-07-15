import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* Это страница динамическая  */}
    </div>
  );
};

export default MainLayout;
