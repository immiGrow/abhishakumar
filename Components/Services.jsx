import React from 'react'
import {SiNextdotjs,SiTailwindcss} from 'react-icons/si'
import {GrFormAdd} from 'react-icons/gr'
import {RiPagesFill} from 'react-icons/ri'
import {BiSolidCopyAlt} from 'react-icons/bi'
export default function Services() {
  return (
    <div className='overflow-hidden'>
        <div className="text-center pb-20 md:pb-20 lg:pb-28 ">
            <h2 className='text-blue-600 font-bold text-lg'>What I offer</h2>
            <h1 className='text-[#090e34] font-bold text-4xl md:text-5xl pt-1'>My Services</h1>
          
        </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 pb-24 -mt-4 md:space-y-0 space-y-6">
        <div className="md:p-2 lg:p-0 xl:p-4 md:w-1/3 flex flex-col cursor-pointer   text-center items-center">
          <div className="w-20 h-20 inline-flex items-center text-6xl justify-center rounded-full text-blue-600 mb-5 flex-shrink-0">
           <span><SiNextdotjs/></span>
           <span><GrFormAdd/></span>
           <span><SiTailwindcss/></span>

          </div>
          <div className="flex-grow lg:px-12 md:px-4 px-12 text-slate-800 text-center justify-center flex">
            <div className="">
            <h2 className="text-[#090e34] text-xl font-bold title-font mb-3">Web Applications <span className='md:text-base'>(NEXT JS)</span></h2>
            <p className=" text-sm xl:text-base  text-center">Better designed and fast working websites with <span className='font-bold'>modern React Framework</span>, built with <span className='font-bold'>Database (MongoDB) + Tailwind CSS User Interfaces</span> which are compatible with any device.</p>
            </div>

          </div>
        </div>
        <div className="md:p-2 lg:p-0 xl:p-4 md:w-1/3 flex flex-col cursor-pointer  text-center items-center">
          <div className="w-20 h-20 inline-flex items-center text-7xl justify-center rounded-full text-blue-600 mb-5 flex-shrink-0">
            <RiPagesFill/>
          </div>
          <div className="flex-grow lg:px-12 md:px-4 px-12  text-slate-800 text-center justify-center flex">
            <div className="">
            <h2 className="text-[#090e34] text-xl font-bold title-font mb-3">Landing Pages</h2>
            <p className=" text-sm xl:text-base  text-center">Websites Homepages designed with the modern CSS Framework Tailwind CSS that leads your app to Next-level Experiences.</p>
            </div>
          </div>
        </div>
        <div className="md:p-2 lg:p-0 xl:p-4 md:w-1/3 flex flex-col cursor-pointer  text-center items-center">
          <div className="w-20 h-20 inline-flex items-center text-7xl justify-center rounded-full  text-blue-600 mb-5 flex-shrink-0">
           <BiSolidCopyAlt/>
          </div>
          <div className="flex-grow lg:px-12 md:px-4 px-12 text-slate-800 text-center justify-center flex">
            <div className="">
            <h2 className="text-[#090e34] text-xl font-bold title-font mb-3">Copywriting</h2>
            <p className=" text-sm xl:text-base  text-center">Effective copywriting aims to engage the audience, convey a message clearly. Whether it is for website, well-crafted copy can significantly impact the success of a business or campaign.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
