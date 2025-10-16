import React from 'react'
import style from '../styles/Home.module.css'
const Card1 = ({image}) => {
  return (
    <div className='flex flex-col m-auto md:flex-row gap-1 p-3 rounded-2xl border w-[80%] md:h-fit h-fit '>
        <div className='flex flex-col gap-3.5 '>
            <h3 className='font-bold md:text-[21px] text-[16px]'>Welcome To</h3>
            <h1 className='font-bold md:text-[28px] text-[18px]'>Glorious Educational Academy Indore </h1>
            <p  className={`${style.forp1}`}>At Glorious Educational Academy School, we are more than just an educational institution- we are a transformative learning space where students grow into confident, responsible, and innovative individuals. Our commitment to academic excellence, holistic development, and a nurturing environment makes us a preferred choice for parents and students seeking world-class education.</p>
        </div>
        <img className='w-[600px] h-[190px] ' src={image} alt="images" />
    </div>
  )
}

export default Card1