import React from 'react'
import ExperienceCard from '../utils/ExperienceCard'
import AccentBtn from '../utils/AccentBtn'

const Experience = () => {
  return (
    <div>
        <div className='container px-12 xl:px-0 py-20'>
            <h2 className='skillTitle text-4xl font-extrabold capitalize mb-20'>Experience</h2>
            <div className='grid w-full grid-cols-responsivePortfolioCardSmall gap-4 '> 
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
            <div className='mt-16'>
                <AccentBtn lable="Check my LinkedIn" />
            </div>
        </div>
    </div>
  )
}

export default Experience