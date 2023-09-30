
import React from 'react'

import ContactForm from './ContactForm'

export default function Contact() {
  return (

    <div>
        <div className="pt-4 pb-8 md:py-8">

        <h2 className='text-xl text-blue-600 text-center font-bold pt-1'>Contact With Me</h2>
        <h1 className=' min-[320px]:text-3xl text-4xl md:text-5xl text-[#090e34] text-center font-bold pt-2'>Have any Project in Mind?</h1>
        </div>
    <div className="">
        <ContactForm/>
    </div>
    </div>
   
  )
}
