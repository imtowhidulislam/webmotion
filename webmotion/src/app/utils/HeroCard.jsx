import React from 'react'
import {AiOutlineLine} from "react-icons/ai"

const HeroCard = () => {
  return (
    <div className='max-w-xs bg-[#d4e9d3] p-5 border-2 rounded-xl'>
        <div><img src="https://unsplash.it/500/500?image=456" alt="" className='rounded-xl' /></div>
        <div>
            <h2 className='text-3xl font-bold capitalize my-2'>Travers Ethopidor</h2>
            <div className='flex items-center justify-between'>
                <p className='text-xs'>UI/UX Designer</p>
                <div className='line'>
                    <AiOutlineLine className='lineIcon' />
                </div>
                <p className='text-xs text-gray-300'>Front-end Developer</p>
            </div>
        </div>
    </div>
  )
}

export default HeroCard