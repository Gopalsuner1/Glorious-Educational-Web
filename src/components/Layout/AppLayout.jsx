import Header from "../UI/Header.jsx";
import Footer from "../UI/Footer.jsx";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  console.log("laylout");

  return (
    <div className="bg-[#FBF3D1] min-h-screen ">
      <Header />
      {/* ✅ Add padding to prevent content from going under header */}
      <div className="pt-20">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default AppLayout;
