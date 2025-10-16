import React from 'react'
import Header from '../components/Header'
import Poster from '../components/Poster'
import Card1 from '../components/Card1'
import p3 from '../assets/p3.jpg'
const Home = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col gap-6 scroll-smooth bg-[#FBF3D1] '>
        <Header/>
        <main className='w-full  h-fit flex flex-col items-center gap-10'>
          <Poster/>
          <Card1 image={p3}/>
        </main>
    </div>
  )
}

export default Home