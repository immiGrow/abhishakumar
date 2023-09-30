"use client"
import Image from 'next/image'
import Navbar from '@/Components/Navbar'
import Intro from '@/Components/Intro'
import AboutMe from '@/Components/AboutMe'
import Services from '@/Components/Services'
import Portfolios from '@/Components/Portfolios'
import Contact from '@/Components/Contact'
// import Footer from '@/Components/Footer'

export default function Home() {
  return (
   <>
   <div className="p-0 m-0">
   <Navbar/>
   <Intro/>
   <AboutMe/>
   <Services/>
   <Portfolios/>
   <Contact/>
   </div>
  

   {/* <Footer/> */}
   </>
  )
}
