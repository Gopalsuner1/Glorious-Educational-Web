import React, { useState } from 'react'
import IconProvider from '../../store/IconProvider'
import { Link } from 'react-router-dom'

const Slidbar = ({linkss,icons,hideHeader,style}) => {
    const [check,setCheck] = useState("");
  return (
    <div className={`min-h-fit min-w-fit bg-[#e6e7af] border-l-[1px] absolute p-5  z-20 right-0 top-full transition-transform duration-400 ease-in-out ${style} ${hideHeader ? "translate-x-full" : "translate-x-0" }`}>
         <ul className='flex flex-col font-bold text-nowrap space-y-3 f4'>
          {linkss.map(({name,path}) => (
            <Link
              className={` ${check == name ? 'bg-white':' bg-[#e6e7af]'} rounded`}
              key={name}
              to={path}
              onClick={() =>setCheck(name)}
            >{name}
            </Link>
          ))}
        </ul>

        <ul className='mt-4 flex flex-wrap space-x-4'>
          {icons.map(({id,lin}) => (
            <a key={id} target="_blank" href={lin}>
              <IconProvider id={id} 
              
              />
            </a>
          ))}
        </ul>
    </div>
  )
}

export default Slidbar