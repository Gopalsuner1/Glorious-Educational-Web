import { createSlice } from "@reduxjs/toolkit";
import { React, useState } from "react";

const initialState = {
  isHeader: false,
  socialIcons: [
    {
      url: "https://wa.me/+919009090245",
      style: "hover:text-green-500",
      id: "whatsapp",
    },
    {
      url: "https://www.instagram.com/gloriouseducational1",
      style: "hover:text-pink-500",
      id: "instagram",
    },
    {
      url: "https://maps.app.goo.gl/3hkr77T7hst62tDu5",
      style: "hover:text-red-500",
      id: "location",
    },
    {
      url: "https://www.facebook.com/Glorious-Educational-Academy-225348011584920/",
      style: "hover:text-blue-700",
      id: "facebook",
    },
    {
      url: "https://www.youtube.com/@gloriouseducational",
      style: "hover:text-red-700",
      id: "youtube",
    }],
  headerTags:[
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
    }],
  isSlider:false,
  check:"Home",  
}
const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers:{
    turnOnHeader:(state)=>{ state.isHeader = true},
    turnOfHeader:(state)=>{state.isHeader = false},
    turnOnSlider:(state)=>{ state.isSlider = true},
    turnOfSlider:(state)=>{state.isSlider = false},
    setCheck:(state,sendValue)=>{state.check = sendValue.payload},
  }

});

export const { turnOfHeader, turnOnHeader ,turnOnSlider, turnOfSlider, setCheck } = headerSlice.actions

export default headerSlice.reducer
