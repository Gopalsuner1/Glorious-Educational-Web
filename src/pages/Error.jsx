import React from 'react'
import Lottie from "lottie-react";
import heroAnimation from "../animation/erroranim.json"; // adjust path as needed
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
     <div className="flex justify-center flex-col items-center h-screen space-y-2 bg-[#FBF3D1]">
      <Lottie
        animationData={heroAnimation} 
        loop={true}  // set to false to play once
        style={{ width: 300, height: 300 }}
      />
    <a className=' font-bold p-1 text-white rounded bg-[#11224E]'><NavLink to={'/'}>Go To Home</NavLink></a>
    </div>

  )
} 

export default Error