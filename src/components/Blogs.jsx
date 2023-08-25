import React, { useState } from 'react'
import Cards from './Cards'
import Button from './Button';
import {AiOutlineAlignLeft,AiOutlineAlignCenter,AiOutlineAlignRight,AiFillFileImage} from"react-icons/ai"
import {PiListBullets} from "react-icons/pi"

const Blogs = () => {
  const card = Array.from({length: 9}, (_, index) => {
    return <Cards key={index} />;
  });
  const [textsize, settextsize] = useState(16)
  return (
    <div className='bg-orange-500 h-full text-white pt-20 pb-20'>
      <div className='container md:mx-auto px-28 mt-20'>
        <div className='text-3xl'>Start composing your blog now ...</div>
        <div class="flex mb-4 md:pt-12 pt-6">
          <div class="flex-1 bg-gray-400 h-12 p-1 border border-black">
            <div className='flex'>
            <button className="bg-orange-500 text-white font-serif py-2 px-5 rounded md:ml-2 hover:bg-orange-400 duration-500 md:flex items-center">{textsize}</button>
            <button className="bg-orange-500 text-white font-serif py-1 px-2 rounded md:ml-2 hover:bg-orange-400 duration-500 md:flex items-center" onClick={()=>{(textsize==28)?settextsize(textsize):settextsize(textsize+2)}}>+</button>
            <button className="bg-orange-500 text-white font-serif py-1 px-2 rounded md:ml-2 hover:bg-orange-400 duration-500 md:flex items-center" onClick={()=>{(textsize==2)?settextsize(textsize):settextsize(textsize-2)}}>-</button>
            </div>
          </div>
          <div class="flex-1 bg-gray-500 h-12 p-1 border border-black"><Button color="orange" text="B"/></div>
          <div class="flex-1 bg-gray-400 h-12 p-1 border border-black"><Button color="orange" text="I"/></div>
          <div class="flex-1 bg-gray-500 h-12 p-1 border border-black"><Button color="orange" text="U"/></div>
          <div class="flex-1 bg-gray-400 h-12 p-1 border border-black"><Button color="orange" text="H1"/></div>
          <div class="flex-1 bg-gray-500 h-12 p-1 border border-black"><Button color="orange" text="H2"/></div>
          <div class="flex-1 bg-gray-400 h-12 p-1 border border-black"><Button color="orange" text="H3"/></div>
          <div class="flex-1 bg-gray-400 h-12 p-1 border border-black"> <button className="bg-orange-500 text-white font-serif py-3 px-6 rounded md:ml-5 hover:bg-orange-400 duration-500 md:flex items-center"><AiOutlineAlignLeft/></button></div>
          <div class="flex-1 bg-gray-500 h-12 p-1 border border-black"><button className="bg-orange-500 text-white font-serif py-3 px-6 rounded md:ml-5 hover:bg-orange-400 duration-500 md:flex items-center"><AiOutlineAlignCenter/></button></div>
          <div class="flex-1 bg-gray-400 h-12 p-1 border border-black"><button className="bg-orange-500 text-white font-serif py-3 px-6 rounded md:ml-5 hover:bg-orange-400 duration-500 md:flex items-center"><AiOutlineAlignRight/></button></div>
          <div class="flex-1 bg-gray-500 h-12 p-1 border border-black"><button className="bg-orange-500 text-white font-serif py-3 px-6 rounded md:ml-5 hover:bg-orange-400 duration-500 md:flex items-center"><PiListBullets/></button></div>
        </div>
        <div className='bg-black md:h-80 h-52 w-full flex place-content-evenly p-3 rounded-lg'>
          <textarea name="" placeholder='Start here...' id="" cols="170" rows="10" className='border border-black rounded-lg p-2 text-black'></textarea>
        </div>
        <div className='bg-black flex md:p-3 p-1 rounded-lg place-content-end'>
          <input className="bg-orange-500 text-white font-serif py-1 px-3  rounded md:ml-1  hover:bg-orange-400 duration-500 md:flex items-center" type="file" />
          <Button color="orange" text="Save Draft"/>
          <Button color="orange" text="Post"/>
        </div>
      </div>
      <div className='place-content-center md:pt-14 pt-11 text-4xl flex'>More Blogs</div>
      <div className='md:pt-10 pt-11 md:p-3.5 p-16 flex justify-evenly flex-wrap'>
          {card}
        </div>
    </div>
  )
}

export default Blogs