import logo from "../../assets/logo.png";
import { href, Link } from "react-router-dom";
import styles from "../../styles/Header.module.css";
import { useEffect, useState } from "react";
import IconProvider from "../../store/IconProvider";

const Header = () => {
  console.log("helder");
  const [hideHeader, setHideHeader] = useState(false);
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
      name: "Abount Us",
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
    <div
      className={`${styles.header} ${
        hideHeader ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className={styles.container1}>
        <img src={logo} className="w-9" alt="Glorious Academy logo" />
        <h1 className={` ${styles.h1}`}>Glorious Educational Academy</h1>
      </div>
      <div className={styles.container2}>
        <ul className={styles.container2ul}>
          {linkss.map((e) => (
            <Link
              key={e.name}
              className={`relative ${styles.line}`}
              to={e.path}
            >
              {e.name}
            </Link>
          ))}
        </ul>

        <div className={styles.container2ul2}>
          {icons.map((e) => (
            <a key={e.id} target="_blank" href={e.lin}>
              <IconProvider id={e.id} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
