import Header from '../UI/Header.jsx'
import Footer from '../UI/Footer.jsx'
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [hideHeader, setHideHeader] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop && currentScroll > 50) {
        setHideHeader(true);   // scroll down → hide
      } else {
        setHideHeader(false);  // scroll up → show
      }

      lastScrollTop = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#FBF3D1] min-h-screen ">
      <Header isHidden={hideHeader} />

      {/* ✅ Add padding to prevent content from going under header */}
      <div className="pt-24">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default AppLayout;
