import Link from 'next/link'
import React from 'react'
import PortfolioCard from '../utils/PortfolioCard'
import Styles from "../../styles/Portfolio.module.css"
import AccentBtn from '../utils/AccentBtn'

const Project = () => {
  return (
    <div>
        <div className='container px-12 xl:px-0 py-20'>
            <div className='mb-12'>
                <h2 className='text-4xl font-extrabold capitalize mb-8'>portfolio</h2>

                <nav>
                    <ul className='flex gap-6'>
                        <li className={Styles.portfolioLink}>
                            <Link href='#'>Social Media</Link>
                        </li>
                        <li className={Styles.portfolioLink}>
                            <Link href='#'>UI/UX Designer</Link>
                        </li>
                        <li className={Styles.portfolioLink}>
                            <Link href='#'>Motion Design</Link>
                        </li>
                        <li className={Styles.portfolioLink}>
                            <Link href='#'>React Application</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='portfolioLayout'>
                <PortfolioCard image="https://unsplash.it/1000/500?image=235" />
                <PortfolioCard image="https://unsplash.it/1000/500?image=232" />
                <PortfolioCard image="https://unsplash.it/1000/500?image=435" />
                <PortfolioCard image="https://unsplash.it/1000/500?image=215" />
                <PortfolioCard image="https://unsplash.it/1000/500?image=231" />
                <PortfolioCard image="https://unsplash.it/1000/500?image=275" />
            </div>
            <div className='grid place-items-center mt-12'>
                <AccentBtn lable="Check out all my project" />
            </div>
        </div>
    </div>
  )
}

export default Project