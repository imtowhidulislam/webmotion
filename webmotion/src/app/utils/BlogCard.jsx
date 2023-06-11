import React from 'react'
import {BsBoxArrowInRight} from "react-icons/bs"
import AccentBtn from './AccentBtn'

const BlogCard = () => {
  return (
    <div className=' rounded-xl bg-slate-50 drop-shadow-lg overflow-hidden'>
        <div className='w-full'>
            <img className='object-cover object-center' src="https://unsplash.it/600/350?image=534" alt="" />
        </div>
        <div className='px-6 pb-6 pt-8 blogContent'>
            <div className=' '>
                <h2 className='capitalize font-bold leading-tight text-sm'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</h2>
                <p className='leading-tight text-xs md:text-sm text-gray-300 my-4'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. adipisicing elit. Repellat, nisi.</p>
            </div>
            <div>
                <button className='capitalize text-md flex items-center gap-2 justify-center font-bold text-orange-500 py-3'>learn more <BsBoxArrowInRight className='text-xl' /></button>
            </div>
            <div>
                <AccentBtn lable="See details" />
            </div>
        </div>
    </div>
  )
}

export default BlogCard