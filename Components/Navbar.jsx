import React from 'react'
import logo_image from '../Images/logo_image.png'
import Image from 'next/image'
export default function Navbar() {
  return (
    <div>
        
      <nav className='bg-white w-full '>
        <div className='flex justify-between px-2 py-2 md:px-4 xl:px-8 lg:px-6 lg:py-2 md:py-2 items-center'>
        <div className="">
    <Image src={logo_image} width={300} height={600} className='min-[320px]:w-8 w-12 md:w-16' alt=''/>
    </div>
        <div className="">
    <button className='bg-blue-700 text-white  md:text-base text-[0.7rem] min-[320px]:px-2  px-3 py-2 text-center font-semibold rounded-md'>Contact Me</button>
    </div>
    </div>
      </nav>

    </div>
  )
}
