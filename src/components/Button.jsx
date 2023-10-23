import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'

const Button = ({color,text}) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const postblog = ()=>{
    console.log("post");
     };
     const saysignin = () => {
       alert('Please Sign in for post any blog'); // Display an alert dialog with the message "Button clicked!"
     };

  return (
    <button className={`bg-${color}-500 text-white font-serif py-2 px-6 rounded md:ml-5 hover:bg-${color}-400 duration-500
     md:flex items-center`} onClick={isAuthenticated ? () => postblog() : () => saysignin()}>{text}</button>
  )
}

export default Button