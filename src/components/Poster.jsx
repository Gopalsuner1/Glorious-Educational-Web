import React from 'react'
import style from '../styles/Home.module.css'
const Poster = () => {
  return (
    <div className={` md:w-[95%] md:p-[50px] items-center  rounded-2xl overflow-hidden w-[95%] md:h-[560px] h-[250px] ${style.bgdiv}  flex flex-col justify-center `}>
                  <div className={` flex gap-6 overflow-hidden flex-col w-full justify-center items-center  ${style.anim1}`}>
                     <h1 className={`md:text-[42px] text-[22px] mt-5 font-bold ${style.f1 } `}> Glorious Educational Academy</h1>
                     <p className='text-[11px] md:text-[16px] font-bold'>Founded in 2015, "Glorios Educational Academy" is a co-educational English medium school affiliated to M.P. Board Bhopal in Indore following CBSE Pattern. The students of school have made their mark in acdmics nd sports. The school is supported by group of excellent nd dedicated teachers,supportive,administrative staff and well wishers.</p>
                     <a className=' text-black w-fit pl-1 pr-1 pt-1 pb-1 h-8 text-[11px] md:text-[14px]  rounded font-bold bg-[#34656D] text-center' href="">Learn More..</a>
                  </div>
    </div>
  )
}

export default Poster