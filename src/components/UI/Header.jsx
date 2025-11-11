import logo from "../../assets/logo.png";
import {Link } from "react-router-dom";
import styles from "../../styles/Header.module.css";
import { useEffect, useState } from "react";
import IconProvider from "../../store/IconProvider.jsx";
import Slidbar from "../UI/Slidbar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { turnOfHeader, turnOfSlider, turnOnHeader, turnOnSlider } from "../../features/header/headerSlice.js";

const Header = () => {
  const { isHeader, check, isSlider, socialIcons, headerTags } = useSelector(
    (state) => state.header
  );
  const dispatch = useDispatch();
  let lastScrollTop = 0;
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollTop && currentScroll > 90) {
        dispatch(turnOnHeader()); // scroll down → hide
      } else {
        dispatch(turnOfHeader()); // scroll up → show
      }
      lastScrollTop = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.header} ${
        isHeader ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {isSlider && (
        <Slidbar
          style={styles.slider}
        />
      )}
      <div className={styles.container1}>
        <img src={logo} className="w-8" alt="Glorious Academy logo" />
        <h1 className={` ${styles.h1}`}>Glorious Educational Academy</h1>
      </div>
      <div className={styles.container2}>
        <div className="md:flex hidden">
          <ul className={styles.container2ul}>
            {headerTags.map(({ name, path }) => (
              <Link key={name} className={`relative ${styles.line}`} to={path}>
                {name}
              </Link>
            ))}
          </ul>

          <ul className={styles.container2ul2}>
            {socialIcons.map(({ id, url }) => (
              <a key={id} target="_blank" href={url}>
                <IconProvider id={id} />
              </a>
            ))}
          </ul>
        </div>
        <div className=" flex space-x-3 ">
          {true ? (
            <button className={styles.loginbtn}> Dashboard</button>
          ) : (
            <button className={styles.loginbtn}>Login</button>
          )}
          <button
            onClick={() => dispatch(isSlider?turnOfSlider():turnOnSlider())}
            className={`md:hidden transition-all duration-300 ease-in-out  transform ${
              isSlider ? " border rotate-90 " : "rotate-0"
            }`}
          >
            <IconProvider id={"threeline"} style={"text-[27px]"} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
