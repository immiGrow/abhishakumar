import React from 'react'
import Image from 'next/image'
import my_image from '../Images/hero-image.png'
export default function Intro() {
  return (
    <div>
        <div className="flex justify-between w-full ">
        <div className="pl-4 md:pl-6 lg:pl-12 xl:py-32 lg:py-16 md:py-12 py-6 min-[320px]:py-2 w-full">
            <h3 className='text-blue-600 font-semibold text-sm xl:text-lg pl-0 md:pl-1'>Hey There 👏 I am</h3>
            <h1 className='font-bold min-[320px]:text-lg text-2xl md:text-4xl lg:text-5xl xl:text-6xl min-[320px]:pt-0 pt-2 md:pt-3 text-[#090e34]'>Abhisha Kumar</h1>
            <h2 className=' font-semibold min-[320px]:text-sm text-base md:text-base lg:text-xl xl:text-2xl min-[320px]:py-1 py-3 text-[#090e34]'><span className='text-slate-600'>Professional</span> Web Developer</h2>
            <p className=' md:text-base lg:text-lg xl:text-xl w-4/5 text-[0.7rem] min-[320px]:w-full  md:w-4/5 lg:w-3/5 text-slate-600'>Crafting One-of-a-Kind Web Experience, Turning Your Ideas into Stunning Online Realities, Your Success Story Begins Here.</p>
            <div className="py-4">
                <button className=' text-white bg-blue-600 text-sm  md:text-base lg:text-lg xl:text-xl hover:bg-blue-700 font-semibold px-3 py-2 rounded-md'>Contact Me</button>
            </div>
        </div>
<div className="relative  w-full">
<div className="relative overflow-hidden">
  <div className="w-full pl-4 md:pl-12">

  <Image src={my_image} width={400} height={600} alt="Person" className="xl:-translate-x-8 lg:-translate-x-6 md:-translate-x-3  overflow-hidden min-[425px]:w-3/4 w-[82%] h-full rounded-lg shadow-lg" />
  </div>
  <div className=" absolute xl:bottom-36 bottom-24 -z-10 right-0 overflow-hidden min-[320px]:w-[9rem] min-[320px]:h-[9rem] min-[375px]:w-[12rem] min-[375px]:h-[12rem] w-[14rem] h-[14rem] md:w-[24rem] md:h-[24rem] lg:w-[32rem] lg:h-[32rem] xl:w-[48rem] xl:h-[48rem] bg-blue-600 rounded-full transform xl:translate-x-32 lg:translate-x-20 md:translate-x-12 translate-x-6 min-[320px]:translate-x-2 md:translate-y-1/2 translate-y-3/4"></div>
</div>

</div>
        </div>
    </div>
  )
}
