import React from "react";
import Navbar from "../component/globals/Navbar";
import Footer from "../component/globals/Footer";
import { Outlet } from "react-router-dom";

const HomePageLayout = () => {
  return (
    <div className="background-image overflow-x-hidden w-screen h-screen overflow-y-scroll text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomePageLayout;
