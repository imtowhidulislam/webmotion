import React from 'react'
import {LuFigma} from "react-icons/lu"

const EducationCard = ({position, skill , desc}) => {
  return (
    <div className='educationCard p-6 rounded-lg drop-shadow-md bg-slate-50 flex items-center justify-start gap-3'>
        <div className='w-12 h-12 rounded-full drop-shadow-md bg-orange-400 grid place-items-center'>
            <LuFigma className='text-2xl text-gray-200' />
        </div>
        <div>
            <p className='text-xs capitalize text-gray-300'>{position}</p>
            <h2 className='text-xl font-bold uppercase mb-4 mt-2'>{skill}</h2>
            <p className='text-xs capitalize text-gray-300'>{desc}</p>
        </div>
    </div>
  )
}

export default EducationCard