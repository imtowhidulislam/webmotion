import React from 'react'
import HeroCard from '../utils/HeroCard'
import AccentBtn from '../utils/AccentBtn'
import Styles from "../../styles/Header.module.css"

const Header = () => {
  return (
    <div className={Styles.header}>
        <div className='grid grid-cols-responsiveHeader gap-20 md:gap-12 px-12 xl:px-0  container place-items-center lg:place-items-start'>
            <div className={Styles.card}>
                <HeroCard />
            </div>
            <div className={Styles.content}>
                <div>
                    <h2 className='capitalize text-3xl font-extralight'>Hello, I'm Towhidul Islam <span className='font-bold lowercase'>I'm a Front-End Developer</span></h2>
                </div>
                <div className='flex items-center gap-8 my-8'>
                    <div>
                        <h2 className='text-3xl font-extrabold text-orange-600'>+ de 7</h2>
                        <p className='text-xs'>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-extrabold text-orange-600'>+ de 50</h2>
                        <p className='text-xs'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <AccentBtn lable="my portfolio" />
            </div>
        </div>
    </div>
  )
}

export default Header