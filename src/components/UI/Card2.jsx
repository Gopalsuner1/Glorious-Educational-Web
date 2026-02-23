import React from 'react'
import { FaUserGroup } from "react-icons/fa6";
const Card2 = ({header,value}) => {
  return (
    <div className='border w-52 h-24 rounded-2xl p-2'>
        <div className='flex justify-between'>
            <h1 className='font-bold'>{header}</h1>
            <FaUserGroup/>
        </div>
        <div>
            <h3 className='font-bold text-2xl'>{value}</h3>
        </div>
    </div>
  )
}

export default Card2