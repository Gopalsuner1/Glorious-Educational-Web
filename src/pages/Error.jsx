import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div >
        <div className='m-auto font-bold mt-5  w-fit' >
            <h1>Page Not Found Sorry </h1>
            <button className='bg-blue-600 p-3 font-bold rounded-2xl'>
              <NavLink to='/'>Home</NavLink>
             </button>
        </div>
        
    </div>
  )
}

export default Error