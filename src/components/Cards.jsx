import React from 'react'
import Button from './Button'
const Cards = () => {
  return (
    <div className='pt-10'>
        <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-md md:flex-row">
            <img
            className="h-48 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/images/manhome.png"
            alt="" />
            <div className="flex flex-col justify-start md:p-6 p-4">
                <h5
                    className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    Card title
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </p>
                <div className='pt-1'>
                <a href="/readmore"><Button text="Read More.." color="orange"/></a>
            </div>
            <p className="pt-2 text-xs text-neutral-500 dark:text-neutral-300 text-right">
                    Last updated 3 mins ago
                </p>
            </div>
        </div>
    </div>
    )
}

export default Cards