import React from 'react'
import Poster from '../components/Poster'
import Card1 from '../components/Card1'
import p3 from '../assets/p3.jpg'
const Home = () => {
  return (
    <div className='mt-5 mb-5  flex flex-col gap-6'>
        <main className='w-full  h-fit flex flex-col items-center gap-10'>
          <Poster/>
          <Card1 image={p3}/>
          {/* <Card1 image={p3}/> */}
        </main>
    </div>
  )
}

export default Home