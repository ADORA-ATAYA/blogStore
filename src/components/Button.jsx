import React from 'react'

const Button = ({color,text}) => {
  return (
    <button className={`bg-${color}-500 text-white font-serif py-2 px-6 rounded md:ml-5 hover:bg-${color}-400 duration-500 md:flex items-center`}>{text}</button>
  )
}

export default Button