import React from 'react'
import ItemsContainer from './ItemsContainer'
import SocialIcons from './SocialIcons'
import { Icons } from "./footermenu";

const Footer = () => {
  return (
    <footer>
      <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[ffffff19] py-7'>
        <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/4 md:flex'>
          <span className='text-teal-400'>Free&nbsp;</span> until you're ready to
          launch<img src="/images/rocket.png" alt="" className='h-10  flex pl-3'/>
        </h1>
        <div>
          <input type="text" placeholder='Enter youe phone no.' 
          className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 border rounded px-2 focus:outline-none'/>
          <button className='bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md
           text-white md:w-auto w-full'>Requested code</button>
        </div>
      </div>
      <ItemsContainer />
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center md:pt-4 pt-2 text-sm pb-8 bg-orange-500">
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  )
}

export default Footer