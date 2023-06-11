import React from 'react'
import EducationCard from '../utils/EducationCard'

const Education = () => {
  return (
    <div>
        <div className='container px-12 xl:px-0 py-20'>
            <h2 className='skillTitle text-4xl font-extrabold capitalize mb-20'>Educations</h2>
            <div className='grid w-full grid-cols-responsivePortfolioCardSmall gap-4 '> 
                <EducationCard position="design" skill="ui/ux design" desc="figma official youtube channel" />
                <EducationCard position="graphic" skill="Illustration design" desc="Satori youtube channel" />
                <EducationCard position="coding" skill="web development" desc="freecodecamp youtube channel" />
            </div>
        </div>
    </div>
  )
}

export default Education