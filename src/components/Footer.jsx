import logo from '../assets/logo.png';
import { FiPhoneCall } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <div className="w-full h-fit  gap-5 md:gap-0 md:pl-[90px] md:pr-[90px] pt-3   flex flex-col md:flex-row md:flex-wrap  bg-[#96A78D]">
      <div className=" md:h-fit  h-[50%] pl-4 flex flex-col md:w-1/2 w-full md:gap-6 gap-4">
        <div className="flex md:gap-6 items-center pl-4 md:pl-0 gap-2 w-full ">
          <img className="md:w-26 md:h-26 h-11 w-11" src={logo} alt="school logo" />
          <div>
            <h1 className="font-bold md:text-[39px] text-[17px] ">Glorious</h1>
            <h4 className="font-bold text-nowrap md:text-[21px] text-[13px] ">
              Educational Academy School
            </h4>
          </div>
        </div>
        <div className="flex md:gap-6 gap-5  pl-5 items-center">
          <FaMapMarkerAlt className="md:text-[29px] text-[18px] " />
          <div className="font-medium md:text-[15px]">
            <h4>Glorious Educational Academy School, Dudhiya,</h4>
            <h4>खसरा न. - 2/8/2 Village - दूधिया पीतांबरा धाम मंदिर रोड</h4>
          </div>
        </div>
         
        <div className="flex font-medium  md:text-[15px]items-center pl-5 gap-6 ">
          <FiPhoneCall className="md:text-[29px] text-[20px] " />
          <h1 className=" text-[15px]">+91 9977773630 | +91 9009090245</h1>
        </div>
        <div className="flex items-center pl-5 gap-6 ">
          <IoMdMail className="md:text-[29px] text-[20px] " />
         <div className="flex font-medium md:text-[15px] flex-col underline">
           <a href="">info@gloriousacademyindore.com</a>
           <a href="">gloriouseducational304@gmail.com</a>
         </div>
          {/* <h1 className=" text-[15px]"> |</h1> */}
        </div>
      </div>
      <div className=" h-[80%]  md:text-[15px] text-[11px]  md:w-1/2 w-full md:pt-6 pl-8 grid grid-cols-3 grid-rows-5 gap-4 text-nowrap text-justify">
            <h1 className="font-bold md:text-2xl text-[13px] text-nowrap  col-start-1 row-start-1 ">QUICK LINKS</h1>
            <a className="col-start-1  row-start-2 w-fit font-medium" href="">Our Journey</a>
            <a className="col-start-1  row-start-3 w-fit font-medium" href="">Admission Process</a>
            <a className="col-start-1  row-start-4 w-fit font-medium" href="">Boarding FAQ</a>
            <a className="col-start-2  row-start-2 w-fit font-medium" href="">Boarding Experience</a>
            <a className="col-start-2  row-start-3 w-fit font-medium" href="">Learning Support</a>
            <a className="col-start-2  row-start-4 w-fit font-medium" href="">Contact Us</a>

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
