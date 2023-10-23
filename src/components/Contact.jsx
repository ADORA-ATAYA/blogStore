import React, { useState } from 'react'
import {FiPhoneCall,FiMail} from"react-icons/fi"
import {MdLocationOn} from "react-icons/md"
import {BsFacebook,BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'
import { Button } from '@material-tailwind/react'

const Contact = () => {
  const [form, setform] = useState({})
  const handlerform = (e)=>{
    // console.log(e.target.value)
  setform({ ...form,[e.target.name] :e.target.value})
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const res = await fetch('http://localhost:8080/',{
      method:'POST',
      body: JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = res.json()
    console.log(data)
  }
  return (
    <div className='bg-orange-500 h-full text-white pt-20 md:pt-20 pb-10 p-2'>
      <div className='flex w-full min-h-screen justify-center items-center '>
        <div className='flex flex-col  md:flex-row md:space-x-6  space-y-6 md:space-y-0  bg-white w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-black text-black shadow shadow-md overflow-hidden'>
          <div className='flex flex-col justify-between space-y-8'>
            <div>
              <div className='inline-flex space-x-4 items-center'>
                <h1 className='font-bol text-4xl tracking-wide inline-flex'>Contact Us</h1>
                <span><img src="/images/contact.gif"className='w-20 h-20' alt="" /></span>
              </div>
              <p className='pt-2 text-slate-600 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique officia soluta commodi ut aut.
                 Dignissimos magni ex fugit suscipit 
                exercitationem a ullam! Sequi, eligendi cumque mollitia perferendis quibusdam ullam in!
              </p> 
            </div>
            <div className='flex flex-col space-y-6'>
              <div className='inline-flex space-x-2 items-center'>
                <FiPhoneCall className='text-slate-600 text-xl'/>
                <span>+91-9766854441</span>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <FiMail className='text-slate-600 text-xl'/>
                <span>Blogstore3445@gmail.com</span>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <MdLocationOn className='text-slate-600 text-xl'/>
                <span>Sector 34, NCR, Delhi.</span>
              </div>
            </div>
            <div className='flex space-x-5 text-xl '>
              <div><a href=""><BsFacebook/></a></div>
              <div><a href=""><BsLinkedin/></a></div>
              <div><a href=""><BsTwitter/></a></div>
              <div><a href=""><BsInstagram/></a></div>
            </div>
          </div>
          <div className=''>
            {/* <div className='absolute z-0 w-40 h-40 bg-amber-500 rounded-full -right-28 -top-28'></div>
            <div className='absolute z-0 w-40 h-40 bg-amber-500 rounded-full -left-28 -bottom-20'></div> */}
            <div className='z-10 bg-blue-500 rounded-xl shadow shadow-black p-8 text-gray-600 md:w-80'>
              <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
                <div>
                  <label htmlFor="" className='text-sm'>Your Name</label>
                  <input type="text" placeholder='Your name' onChange={handlerform} name='username' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300' />
                </div>
                <div>
                  <label htmlFor="" className='text-sm'>Email Address</label>
                  <input type="email" placeholder='example@gmail.com' onChange={handlerform} name='email' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300' />
                </div>
                <div>
                  <label htmlFor="" className='text-sm'>Message</label>
                  <textarea placeholder='example@gmail.com' rows="4" onChange={handlerform} name='message' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300'></textarea>
                </div>
                <button className='inline-block self-end bg-black border border-black text-white font-bold rounded-lg px-2 py-2 uppercase text-sm'>send message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact