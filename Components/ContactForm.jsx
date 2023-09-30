import React,{useRef,useState} from 'react'
import {GrNorton} from 'react-icons/gr'

export default function ContactForm() {

  const [sent, setSent] = useState(false)
const [formData, setFormData] = useState({
  first_name:"",
  last_name:"",
  user_email:"",
  user_ph_number:"",
  message:"",
  to_name:"Abhisha Kumar"
})

const handleChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
  
}
let data={service_id:"service_9xioabm",template_id:"template_7vuba0u",user_id:"tUl5vBH6BefjXF1Pz",template_params: formData}

  const sendEmail=async(e)=>{
    e.preventDefault()
    console.log(formData)
    const req=await fetch("https://api.emailjs.com/api/v1.0/email/send",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
  if (req.ok){
    setSent(true)
  }
    console.log(req.ok)
  }
console.log(sent)
  
  return (

    <div>

<div className="isolate bg-white px-6 lg:px-8 pb-24">
  
  
<form  onSubmit={sendEmail} className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
      <div>
        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
        <div className="mt-2.5">
          <input type="text" name="first_name" id="first-name" required onChange={handleChange} autoComplete="given-name" className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
        <div className="mt-2.5">
          <input type="text" name="last_name" id="last-name" required onChange={handleChange} autoComplete="family-name" className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">Position</label>
        <div className="mt-2.5">
          <input type="text" name="position" id="position" required onChange={handleChange} autoComplete="organization" placeholder='For eg. I am a student' className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div className="mt-2.5">
          <input type="email" name="user_email" id="email" required onChange={handleChange} autoComplete="email" className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
        <div className="relative mt-2.5">
         
          <input type="tel" name="user_ph_number" required onChange={handleChange} id="phone-number" placeholder='For eg. +9182189364XX' autoComplete="tel" className="block w-full rounded-md border-0 py-2 px-3.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
        <div className="mt-2.5">
          <textarea name="message" id="message" rows="4" required onChange={handleChange} placeholder="Elaborate your intention of contacting us" className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>

    </div>
    {!sent?<div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Let&apos;s talk</button>
    </div>:
    <div className="mt-10">
    <div  className="flex justify-center items-center space-x-2 w-full rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><span className='text-lg'><GrNorton/></span><span>Done, Email has been sent</span></div>
  </div>
    }
  </form>
</div>


    
    </div>

  )
}