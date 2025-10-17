import logo from "../assets/logo.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import styles from "../styles/Header.module.css";

const Header = () => {


  return (
    <div className={`h-fit w-full z-10 shadow-xl md:items-center flex md:flex-row flex-col gap-4 pb-2.5 pt-2  `}>
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
            href="https://wa.me/+919009090245"
            className="hover:text-green-500 md:text-[20px]"
            aria-label="WhatsApp"
          >
            <IoLogoWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/gloriouseducational1"
            className="hover:text-pink-500  md:text-[20px]"
            aria-label="Instagram"
          >
            <RiInstagramFill />
          </a>
          <a
            href="https://maps.app.goo.gl/3hkr77T7hst62tDu5"
            className="hover:text-shadow-red-400  md:text-[23px]"
            aria-label="Map"
          >
            <MdLocationPin />
          </a>
          <a
            href="https://www.facebook.com/Glorious-Educational-Academy-225348011584920/"
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
