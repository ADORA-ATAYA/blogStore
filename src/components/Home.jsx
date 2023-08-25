import React from 'react'
import {FaRegHandPointer} from "react-icons/fa"
import {FcSearch} from "react-icons/fc"
import Cards from './Cards'
const Home = () => {
  const card = Array.from({length: 6}, (_, index) => {
    return <Cards key={index} />;
  });
  return (
    <div className='bg-orange-500 h-full text-white pt-14 '>
      <div className=' container md:mx-auto px-28 flex mt-28 place-content-around'>
        <div className=''>
          <h1 className='text-3xl md:text-6xl'>Hello Bloggers !</h1>
          <h1 className='pt-4 text-xl md:text-4xl font-serif '>Write Whatever you want and just upload it </h1>
          <h1 className='pt-4 text-xl md:text-4xl font-serif flex'>easily in one Click <span className='pl-2 text-xl pt-1'><FaRegHandPointer/></span></h1>
        </div>
        <div className=''>
          <img className="w-auto h-auto pt-2 rounded-2xl " src="/images/boyhome.png" alt="homeimg"/>
        </div>
      </div>

      <div className='md:pt-20 pt-11 place-content-center flex'>
        <input className="p-3 rounded md:w-1/3 w-auto text-black"  type="text" placeholder="Search.." name="search"/>
        <button className='bg-white  p-3 rounded' type="submit"><FcSearch/></button>
      </div>
      <div className='md:pt-20 pt-11 place-content-center flex'>
        <h1 className='font-serif md:text-2xl text-xl text-black'>Some latest Blogs for you -> </h1>
      </div>
      <div className='md:pt-10 pt-11 md:p-3.5 p-16 flex justify-evenly flex-wrap'>
        {card}
      </div>
      <div className=' container md:pt-16 pt-11 flex place-content-around p-20'>
        <div className='w-1/2'>
          <img src="/images/gifblog.gif" alt="gif" className='' />
        </div>
        <div className='items-center flex'>
        <h1 className='pt-4 text-xl md:text-4xl font-serif'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, dicta esse corrupti beatae odit fugiat rerum deleniti aspernatur saepe magni ipsum.
        </h1>
        </div>
      </div> 

    </div>
  )
}

export default Home