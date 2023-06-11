"use client"
import React from 'react'

import {GiFruitTree} from "react-icons/gi"

const Experience = () => {
  return (
    <div className='experienceCard bg-[#e0fff2] px-4 py-6 rounded-md drop-shadow-md'>
        <div className='w-16 h-16 rounded-full drop-shadow-lg experienceLogo'> 
            <GiFruitTree className="text-3xl text-gray-200" />
        </div>
        <div className='mt-3'>
            <p className='text-xs text-gray-400'>2022 - 2023 june</p>
            <h2 className='mb-4'>UI/UX Designer</h2>
            <p className='text-xs text-gray-200'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi sed magni recusandae consequatur commodi pariatur hic ex amet, ut dicta!</p>
        </div>
    </div>
  )
}

export default Experience