import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className="font-dmSans">
      <Navbar />
      <div className="mt-[103px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
