import React from 'react'
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa'
import {AiFillInstagram,AiFillYoutube,AiOutlineTwitter} from 'react-icons/ai'
export default function AboutMe() {
    const con_msg="Let's Build Exceptional Web Experiences Together!"
  return (
    <div>
        
        <div className="md:flex md:justify-between w-full py-20 md:py-16 lg:py-32 xl:py-48 px-8">
            <div className="w-full">
                <h2 className='text-blue-500 font-bold'>ABOUT ME</h2>
                <h1 className='text-[#090e34] font-bold  text-xl md:text-xl lg:text-2xl xl:text-3xl py-2'>Crafting Next-level Experiences</h1>
                <h3 className='text-[#090e34] font-bold text-4xl md:text-4xl lg:text-5xl xl:text-7xl'>Better Design,</h3>
                <h3 className='text-[#090e34] font-bold text-4xl md:text-4xl lg:text-5xl xl:text-7xl pt-2'>Better Results</h3>
            </div>
            <div className="flex justify-center pl-1 pt-8 md:pt-0 md:pl-40 w-full ">
                <div className="">

                <h2 className='text-[#090e34] font-bold text-3xl md:text-2xl lg:text-3xl xl:text-4xl py-4 '>Connect With Me</h2>
                <h1 className='text-[#090e34] font-bold text-2xl md:text-xl lg:text-2xl xl:text-3xl py-4'>{con_msg}</h1>
                {/*Facebook, instagram,Linkedin,YouTube */}
                <div className=" flex space-x-4 md:pl-4 lg:pl-8 md:space-x-4 text-base lg:space-x-6 py-2 lg:text-base xl:text-lg">
                <span className='text-slate-600   p-2 border border-slate-600 hover:border-white border-opacity-40  rounded-full hover:text-white hover:bg-blue-600 cursor-pointer'><FaFacebookF/></span>
                <span className='text-slate-600  border border-slate-600 hover:border-white border-opacity-40 p-2  rounded-full hover:text-white hover:bg-blue-600 cursor-pointer'><AiFillInstagram/></span>
                <span className='text-slate-600  border border-slate-600 hover:border-white border-opacity-40 p-2  rounded-full hover:text-white hover:bg-blue-600 cursor-pointer'><AiFillYoutube/></span>
                <span className='text-slate-600  border border-slate-600 hover:border-white border-opacity-40 p-2  rounded-full hover:text-white hover:bg-blue-600 cursor-pointer'><AiOutlineTwitter/></span>
                <span className='text-slate-600  border border-slate-600 hover:border-white border-opacity-40 p-2  rounded-full hover:text-white hover:bg-blue-600 cursor-pointer'><FaLinkedinIn/></span>
                </div>


                </div>
            </div>
        </div>

    </div>
  )
}
