import React from 'react'
import Unreveal_logo from '../Images/unreveal_fulllogo.jpg'
import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
  return (
    <div>
        
        <footer className="bg-[#090e34] text-white body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
   <Link href={"https://unrevealakc.vercel.app"}><Image src={Unreveal_logo} className='w-48' alt="Unreveal"/></Link>
   <div className='font-semibold'>

      <h3 className="mt-2 text-lg font-bold text-white ">Contact Info</h3>
      <p>growmore056@gmail.com</p>
      <p>121/43 Sewla Jaat Gwalior Road Agra, Uttar Pradesh</p>
      <p>+918273411580</p>
   </div>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className=" w-full px-4">
        <h2 className="title-font font-bold text-white tracking-widest text-3xl mb-3">What I Do</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white text-xl">Web Applications (NEXT JS)</a>
          </li>
          <li>
            <a className="text-white text-xl">Landing Pages</a>
          </li>
          <li>
            <a className="text-white text-xl">Copywriting</a>
          </li>
         
        </nav>
      </div>
     
      
    
    </div>
  </div>
 
</footer>

    </div>
  )
}
