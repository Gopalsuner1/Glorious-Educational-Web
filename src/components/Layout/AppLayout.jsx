import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
  <div className='bg-[#FBF3D1] scroll-smooth box-border overflow-y-auto overflow-x-hidden'>
         <Header></Header>
         <Outlet></Outlet>
         <Footer></Footer>
  </div>)
}

export default AppLayout