import Header from "../UI/Header.jsx";
import Footer from "../UI/Footer.jsx";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  console.log("laylout");

  return (
    <div className="min-h-screen ">
      <Header />
      <div className="pt-26 md:pt-19"> <Outlet /></div>
      <Footer />
    </div>
  );
};

export default AppLayout;
