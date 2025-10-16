import logo from "../assets/logo.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import styles from "../styles/Header.module.css";
import { useEffect, useState } from 'react';

const Header = () => {

 const [isScrollingDown, setIsScrollingDown] = useState(true); // true = down, false = up
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsScrollingDown(false);
      } else if (currentScrollY < lastScrollY) {
        setIsScrollingDown(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={` h-[300px] w-full z-10 shadow-xl flex md:flex-row flex-col gap-4 pb-2.5 pt-2  `}>
      <div className="md:w-[40%] w-full  md:h-full h-[50%] flex justify-center items-center gap-5 md:justify-start md:pl-9">
          <img src={logo} className="w-9 md:w-9" alt="Glorious Academy logo" />
          <h1 className={`  text-black md:text-[18px] text-[20px] ${styles.f2}`}>
              Glorious Educational Academy
          </h1>
      </div>
      <div className=" w-full md:w-[60%] h-[50%]  md:h-full flex items-center">
        {/* Navigation Menu */}
        <ul
          className={` md:w-[50%] w-[65%] text-[11px]  flex items-center justify-around font-bold ${styles.f4}`}
        >
          <li className={`relative ${styles.line}`}>
            <a href="/">Home</a>
          </li>
          <li className={`relative ${styles.line}`}>
            <a href="/about">About Us</a>
          </li>
          <li className={`relative ${styles.line}`}>
            <a href="/contact">Contact Us</a>
          </li>
          <li className={`relative ${styles.line}`}>
            <a href="/help">Help</a>
          </li>
        </ul>

        <div className="flex items-center text-[14px] justify-around w-[35%] md:pl-[70px] md:pr-[70px] pl-[10px] pr-[10px] md:w-[45%]">
          <a
            href="https://wa.me/1234567890"
            className="hover:text-green-500 md:text-[20px]"
            aria-label="WhatsApp"
          >
            <IoLogoWhatsapp />
          </a>
          <a
            href="https://instagram.com"
            className="hover:text-pink-500  md:text-[20px]"
            aria-label="Instagram"
          >
            <RiInstagramFill />
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-shadow-red-400  md:text-[23px]"
            aria-label="Map"
          >
            <MdLocationPin />
          </a>
          <a
            href="https://facebook.com"
            className="hover:text-blue-700  md:text-[20px]"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.youtube.com/@gloriouseducational"
            className="hover:text-red-700  md:text-[20px]"
            aria-label="YouTube"
          >
            <BsYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
