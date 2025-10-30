import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";

 const IconProvider = ({id,style}) => {
  return (
    <>
         {id === "whatsapp" && <IoLogoWhatsapp className={style}/>}
         {id === "instagram" && <RiInstagramFill className={style}/>}
         {id === "location" && <MdLocationPin className={style}/>}
         {id === "facebook" && <FaFacebook className={style}/>}
         {id === "youtube" && <BsYoutube className={style}/>}
         {id === "phone" && <FiPhoneCall className={style}/>}
         {id === "email" && <IoMdMail className={style}/>}
    </>
  )
}
 export default IconProvider;
