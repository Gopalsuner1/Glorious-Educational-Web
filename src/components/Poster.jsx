import React from 'react'
import style from '../styles/Home.module.css'
const Poster = () => {
  return (
    <div className={` md:w-[95%] md:p-[50px] items-center  rounded-2xl overflow-hidden w-[95%] md:h-[560px] h-[250px] ${style.bgdiv}  flex flex-col justify-center `}>
                  <div className={` flex gap-6 overflow-hidden flex-col w-full md:p-14 justify-center items-center  ${style.anim1}`}>
                     <h1 className={`md:text-[42px] text-[22px] mt-5 font-bold ${style.f1 } `}> Glorious Educational Academy</h1>
                     <p className='text-[11px] md:text-[16px] '>Founded in 2015, Glorious Educational Academy is a premier co-educational English medium school located in Indore. Affiliated with the M.P. Board, Bhopal, and following the CBSE pattern, we combine academic rigor with a nurturing environment to prepare students for success in every field of life.

Our students consistently shine in academics and sports, earning accolades and recognition at various levels. Behind their success is a team of passionate educators, committed administrative staff, and a strong support system of parents and well-wishers who believe in our vision.

At Glorious, we don’t just teach — we inspire, empower, and shape the leaders of tomorrow.</p>
                     <a className=' text-black w-fit pl-1 pr-1 pt-1 pb-1 h-8 text-[11px] md:text-[14px]  rounded font-bold bg-[#34656D] text-center' href="">Learn More..</a>
                  </div>
    </div>
  )
}

export default Poster