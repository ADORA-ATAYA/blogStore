import React, { useState } from 'react'
import {MdOutlineMenuBook} from "react-icons/md"
import {FaCrown} from "react-icons/fa"
import {CgMenu} from "react-icons/cg"
import {GrFormClose} from "react-icons/gr"
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
  const [open, setopen] = useState(false)
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  return (
    <nav className='shadow-xl w-full fixed top-0 left-0'>
      <div className='md:flex bg-white py-4 md:px-10 px-7 justify-between items-center'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800'>
          <span className='text-3xl text-orange-500 mr-2'>
            <MdOutlineMenuBook />
          </span>
          <span>
            BLOG STORE 
          </span>
        </div>
        <div onClick={()=>{setopen(!open)}} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'>
          {open ? <GrFormClose/>:<CgMenu/>}
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white 
        md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-400 ease-in ${open ?'top-20 opacity-100':'top-[-490px]'} md:opacity-100`}>
          <li className='md:ml-8 text-xl md:my-0 my-5'><Link className='text-gray-800 hover:text-gray-400 duration-500' to={'/'}>HOME</Link></li>
          <li className='md:ml-8 text-xl md:my-0 my-4'><Link className='text-gray-800 hover:text-gray-400 duration-500' to={'/blogs'}>BLOGS</Link></li>
          <li className='md:ml-8 text-xl md:my-0 my-4'><Link className='text-gray-800 hover:text-gray-400 duration-500' to={'/about'}>ABOUT</Link></li>
          <li className='md:ml-8 text-xl md:my-0 my-4'><Link className='text-gray-800 hover:text-gray-400 duration-500' to={'/contact'}>CONTACT</Link></li>
          {
            isAuthenticated ? <li className='md:ml-8 text-xl md:my-0 my-4'><button className='text-gray-800 hover:text-gray-400 duration-500' 
                              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >LOGOUT</button></li>
                            : <li className='md:ml-8 text-xl md:my-0 my-4'><button className='text-gray-800 hover:text-gray-400 duration-500' 
                              onClick={() => loginWithRedirect()} >LOGIN</button></li>
          }
          <li><Link to={'/premium'}>
            <button className='bg-orange-500 text-white font-serif py-2 px-6 rounded md:ml-8 hover:bg-orange-400 duration-500 md:flex items-center'>
            <span className='text-yellow-400 md:mr-1'><FaCrown/></span>
            Premium
            </button>
          </Link></li>
            <div class="md:ml-8 text-xl md:my-0 my-4">
            {
              isAuthenticated ?<img src={user.picture} alt="..."
                              class="shadow-lg border border-black rounded-full w-14 h-14" />

                              :<img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" alt="..."
                              class="shadow-lg border border-black rounded-full w-14 h-14" />
            }
            </div>
        </ul>
      </div>
    </nav>
  )
}

export default Header