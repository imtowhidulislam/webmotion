import React from 'react'
import AccentBtn from '../utils/AccentBtn'
import Skill from '../utils/Skill'

const Skills = () => {
  return (
    <div className='bg-gray-100 py-20'>
        <div className='container px-12 xl:px-0 skillGrid'>
            <div className='text-left'>
                <h2 className='skillTitle text-7xl font-extrabold text-gray-900 mb-8'>My Skills Stack</h2>
                <p className='text-xs sm:text-sm leading-snug text-gray-600 max-w-xs mb-8'>Lorem ipsum dolor sit amet <span className='font-bold'>Lorem ipsum dolor sit amet.</span> consectetur adipisicing elit. Alias, incidunt!</p>
                <p className='text-xs sm:text-sm leading-snug text-gray-600 max-w-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, esse. Laborum corporis ullam explicabo. Quo expedita numquam eos dolorum necessitatibus?</p>
                <div className='mt-8'>
                    <AccentBtn lable="Check them on my gitHub" />
                </div>
            </div>
            <div className='grid grid-cols-responsiveSkillCard gap-4'>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>

        </div>
    </div>
  )
}

export default Skills