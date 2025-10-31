import logo from "../../assets/logo.png";
import { href, Link } from "react-router-dom";
import styles from "../../styles/Header.module.css";
import { useEffect, useState } from "react";
import IconProvider from "../../store/IconProvider";
import Slidbar from "../UI/Slidbar.jsx";

const Header = () => {
  console.log("helder");
  const [hideHeader, setHideHeader] = useState(false);
  const [slide , setSlide] = useState(false);
  let lastScrollTop = 0;

  const linkss = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Help",
      path: "/help",
    },
  ];
  const icons = [
    {
      lin: "https://wa.me/+919009090245",
      st: "hover:text-green-500",
      id: "whatsapp",
    },
    {
      lin: "https://www.instagram.com/gloriouseducational1",
      st: "hover:text-pink-500",
      id: "instagram",
    },
    {
      lin: "https://maps.app.goo.gl/3hkr77T7hst62tDu5",
      st: "hover:text-red-500",
      id: "location",
    },
    {
      lin: "https://www.facebook.com/Glorious-Educational-Academy-225348011584920/",
      st: "hover:text-blue-700",
      id: "facebook",
    },
    {
      lin: "https://www.youtube.com/@gloriouseducational",
      st: "hover:text-red-700",
      id: "youtube",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop && currentScroll > 90) {
        setHideHeader(true); // scroll down → hide
      } else {
        setHideHeader(false); // scroll up → show
      }

      lastScrollTop = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.header} ${hideHeader ? "-translate-y-full" : "translate-y-0" }`}>
      { slide && <Slidbar linkss={linkss} icons={icons} hideHeader={hideHeader} style={styles.slider}/>}
      <div className={styles.container1}>
        <img src={logo} className="w-8" alt="Glorious Academy logo" />
        <h1 className={` ${styles.h1}`}>Glorious Educational Academy</h1>
      </div>
      <div className={styles.container2}>
        <div className="md:flex hidden">
          <ul className={styles.container2ul}>
          {linkss.map(({name,path}) => (
            <Link
              key={name}
              className={`relative ${styles.line}`}
              to={path}
            >{name}
            </Link>
          ))}
        </ul>

        <ul className={styles.container2ul2}>
          {icons.map(({id,lin}) => (
            <a key={id} target="_blank" href={lin}>
              <IconProvider id={id} 
              
              />
            </a>
          ))}
        </ul>
        </div>
          <div className=" flex space-x-3">
            <button className=" bg-[#FFE797]  border rounded-xs font-bold pl-2.5 pr-2.5 text-black text-[14px] md:text-[16px]">Login</button>
             <button onClick={() => {if(slide){setSlide(false)}else{setSlide(true)}}
             } className={`md:hidden transition-all duration-300 ease-in-out  transform ${slide ? ' border rotate-90 ':'rotate-0'}`}><IconProvider id={"threeline"} style={'text-[27px]'}/></button>
          </div> 
        </div>
    </nav>
  );
};

export default Header;
