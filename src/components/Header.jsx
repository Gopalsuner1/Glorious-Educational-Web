import React from 'react';
import logo from '../assets/logo.png';
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BsYoutube } from 'react-icons/bs';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className='w-full z-50 mb-6 border h-[90px] pt-2 md:h-[90px] sticky top-0 left-0 flex flex-col md:flex-row md:shadow-[0px_13px_47px_-25px_rgba(0,_0,_0,_1)] shadow-[0px_13px_47px_-25px_rgba(0,_0,_0,_1)] bg-white'>
      {/* Logo and Title */}
      <div className='w-full md:w-[40%] h-[50%] md:h-full flex justify-center items-center gap-5 md:justify-start md:pl-9'>
        <img src={logo} className='w-7 md:w-7' alt="Glorious Academy logo" />
        <h1 className={`font-bold text-[18px] ${styles.f2}`}>Glorious Educational Academy</h1>
      </div>

      {/* Navigation and Social Icons */}
      <div className='w-full md:w-[60%] h-[50%] md:h-full flex items-center'>
        {/* Navigation Menu */}
        <ul className={`flex items-center justify-around w-[65%] text-[11px] md:text-[14px] md:w-[50%] font-bold ${styles.f4}`}>
          <li className={`relative ${styles.line}`}><a href="/">Home</a></li>
          <li className={`relative ${styles.line}`}><a href="/about">About Us</a></li>
          <li className={`relative ${styles.line}`}><a href="/contact">Contact Us</a></li>
          <li className={`relative ${styles.line}`}><a href="/help">Help</a></li>
        </ul>

        {/* Social Icons */}
        <div className='flex items-center text-[14px] justify-around w-[35%] md:pl-[70px] md:pr-[70px] pl-[10px] pr-[10px] md:w-[45%]'>
          <a href="https://wa.me/1234567890" className="hover:text-green-500" aria-label="WhatsApp"><IoLogoWhatsapp /></a>
          <a href="https://instagram.com" className="hover:text-pink-500" aria-label="Instagram"><RiInstagramFill /></a>
          <a href="https://twitter.com" className="hover:text-blue-400" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://facebook.com" className="hover:text-blue-700" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://www.youtube.com/@gloriouseducational" className="hover:text-red-700" aria-label="YouTube"><BsYoutube /></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
