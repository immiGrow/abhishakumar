import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Unreveal_logo from '../Images/unreveal_fulllogo.jpg'
import Unreveal_01 from '../Images/unreveal_01.png'
import Unreveal_02 from '../Images/unreveal_02.png'
import Unreveal_03 from '../Images/unreveal_03.png'
import Unreveal_04 from '../Images/unreveal_04.png'
import Unreveal_05 from '../Images/unreveal_05.png'
import Unreveal_06 from '../Images/unreveal_06.png'
import {SiNextdotjs,SiTailwindcss,SiMongodb} from 'react-icons/si'
import {GrFormAdd} from 'react-icons/gr'
import {FaEquals} from 'react-icons/fa'

export default function Unreveal() {
  return (
    <div>
        <section className="hidden sm:block text-gray-600 body-font">
  <div className="container px-5 md:py-12 lg:py-24 mx-auto flex flex-wrap">
    <Link href={"https://unrevealakc.vercel.app"}><div className="flex w-full mb-20 flex-wrap">
     <Image src={Unreveal_logo} width={600} height={500} className='w-60' alt=''/>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. Photography is not only a hobby but it can also be your carrier.</p>
    </div></Link>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
        <Link href={"https://unrevealakc.vercel.app/Company/about"}>
          <Image src={Unreveal_06} width={800} height={700} className='w-full h-full hover:opacity-90' alt='Unreveal'/></Link>
        </div>
        <div className="md:p-2 p-1 w-1/2"><Link href={"https://unrevealakc.vercel.app/Community/contributor"}>
        <Image src={Unreveal_03} width={800} height={700} className='w-full h-full hover:opacity-90' alt='Unreveal'/></Link>
        </div>
        <div className="md:p-2 p-1 w-full"><Link href={"https://unrevealakc.vercel.app"}>
        <Image src={Unreveal_01} width={800} height={700} className='w-full h-full hover:opacity-90' alt='Unreveal'/></Link>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
     <div className="md:p-2 p-1 w-full"> <Link href={"https://unrevealakc.vercel.app/Company/reach"}>
        <Image src={Unreveal_05} width={800} height={700} className='w-full h-full hover:opacity-90' alt='Unreveal'/></Link>
        </div>
        <div className="md:p-2 p-1 w-1/2"><Link href={"https://unrevealakc.vercel.app/Company/join"}>
        <Image src={Unreveal_04} width={800} height={700} className='w-full h-full hover:opacity-90' alt='Unreveal'/></Link>
        </div>
       <div className="md:p-2 p-1 w-1/2"> <Link href={"https://unrevealakc.vercel.app"}>
        <Image src={Unreveal_02} width={800} height={700} className='w-full h-full hover:opacity-90' alt='Unreveal'/></Link>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
<div className=" px-8 space-y-4 block sm:hidden ">
<div className="md:p-2 p-1 w-full">
        <Link href={"https://unrevealakc.vercel.app/Company/about"}>
          <Image src={Unreveal_06} width={800} height={700} className='w-full h-full hover:opacity-90' alt='Unreveal'/></Link>
        </div>
<div className="md:p-2 p-1 w-full"><Link href={"https://unrevealakc.vercel.app/Community/contributor"}>
        <Image src={Unreveal_03} width={800} height={700} className='w-full h-full hover:opacity-90' alt='Unreveal'/></Link>
        </div>
        <div className="md:p-2 p-1 w-full"><Link href={"https://unrevealakc.vercel.app"}>
        <Image src={Unreveal_01} width={800} height={700} className='w-full h-full hover:opacity-90' alt='Unreveal'/></Link>
        </div>
        <div className="md:p-2 p-1 w-full"> <Link href={"https://unrevealakc.vercel.app/Company/reach"}>
        <Image src={Unreveal_05} width={800} height={700} className='w-full h-full hover:opacity-90' alt='Unreveal'/></Link>
        </div>
        <div className="md:p-2 p-1 w-full"><Link href={"https://unrevealakc.vercel.app/Company/join"}>
        <Image src={Unreveal_04} width={800} height={700} className='w-full h-full hover:opacity-90' alt='Unreveal'/></Link>
        </div>
       <div className="md:p-2 p-1 w-full"> <Link href={"https://unrevealakc.vercel.app"}>
        <Image src={Unreveal_02} width={800} height={700} className='w-full h-full hover:opacity-90' alt='Unreveal'/></Link>
        </div>
        </div>     

</section>
<div className="flex justify-center font-bold min-[320px]:text-3xl text-4xl lg:space-x-6 xl:space-x-8 md:text-5xl lg:text-6xl xl:text-8xl pt-8 pb-16 md:pb-24 ">
<span className='text-center pl-4'><SiNextdotjs/><span className='text-[0.4rem] min-[375px]:text-[0.3rem] md:text-base lg:text-lg text-center'>NEXT JS</span></span>
<span><GrFormAdd/></span>
<span className='text-[#38bdf8] text-center pl-4'><SiTailwindcss/><span className='text-[0.4rem] min-[320px]:text-[0.25rem] min-[375px]:text-[0.3rem] md:text-base lg:text-lg text-center'>TAILWIND CSS</span></span>
<span><GrFormAdd/></span>
<span className='text-[#00684a] text-center pl-4'><SiMongodb/><span className='text-[0.4rem] min-[375px]:text-[0.3rem] md:text-base lg:text-lg text-center'>MONGODB</span></span>
<span><FaEquals/></span>
<span><Image src={Unreveal_logo} className='w-32 md:w-60 lg:w-72 xl:w-80' alt='Unreveal'/></span>
</div>
    </div>
  )
}
