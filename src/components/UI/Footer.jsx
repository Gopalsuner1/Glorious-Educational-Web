import logo from "../../assets/logo.png";
import IconProvider from "../../store/IconProvider";
import style from "../../styles/Footer.module.css";
const Footer = () => {
  console.log("footer");

  return (
    <div className={style.footer}>
      <div className={style.container1}>
        <div className={style.inner}>
          <img
            className="md:w-26 md:h-26 h-11 w-11"
            src={logo}
            alt="school logo"
          />
          <div>
            <h1 className="font-bold md:text-[39px] text-[17px] ">Glorious</h1>
            <h4 className="font-bold text-nowrap md:text-[21px] text-[13px] ">
              Educational Academy School
            </h4>
          </div>
        </div>
        <div className="flex md:gap-6 gap-5  pl-5 items-center">
          <IconProvider id={"location"} style={"md:text-[29px] text-[18px]"} />
          <div className="font-medium md:text-[15px]">
            <h4>Glorious Educational Academy School, Dudhiya,</h4>
            <h4>खसरा न. - 2/8/2 Village - दूधिया पीतांबरा धाम मंदिर रोड</h4>
          </div>
        </div>

        <div className="flex font-medium  md:text-[15px]items-center pl-5 gap-6 ">
          <IconProvider id={"phone"} style={"md:text-[29px] text-[20px] "} />
          <h1 className=" text-[15px]">+91 9977773630 | +91 9009090245</h1>
        </div>
        <div className="flex items-center pl-5 gap-6 ">
          <IconProvider id={"email"} style={"md:text-[29px] text-[20px]"} />
          <div className="flex font-medium md:text-[15px] flex-col underline">
            <a href="mailto:info@gloriousacademyindore.com">
              info@gloriousacademyindore.com
            </a>
            <a href="mailto:gloriouseducational304@gmail.com">
              gloriouseducational304@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className={style.container2}>
        <h1 className={style.h1}>QUICK LINKS</h1>
        <a className="col-start-1  row-start-2 w-fit font-medium" href="">
          Our Journey
        </a>
        <a className="col-start-1  row-start-3 w-fit font-medium" href="">
          Admission Process
        </a>
        <a className="col-start-1  row-start-4 w-fit font-medium" href="">
          Boarding FAQ
        </a>
        <a className="col-start-2  row-start-2 w-fit font-medium" href="">
          Boarding Experience
        </a>
        <a className="col-start-2  row-start-3 w-fit font-medium" href="">
          Learning Support
        </a>
        <a className="col-start-2  row-start-4 w-fit font-medium" href="">
          Contact Us
        </a>
      </div>

      <div className=" h-fit md:mt-3 md:mb-3 w-full  text-center">
        <h1 className=" text-[17px]">
          © 2025 by Glorious Educational Academy School, Indore. All rights
          reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
