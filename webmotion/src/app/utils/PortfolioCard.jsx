import React from 'react'
import Image from 'next/image';
import {GoLinkExternal} from "react-icons/go";
import PrimaryBtn from './PrimaryBtn';

const PortfolioCard = ({image}) => {
  return (
    <div className='hover:-translate-y-4 transition-all ease-in-out duzration-300'>
        <div className='max-h-60 rounded-lg drop-shadow-md overflow-hidden relative portfolioCard'>
            <div>
                <img className='object-cover object-center' src={image} alt=""/>
            </div>
            <div className='flex items-center justify-between gap-4 btn-container w-full px-4'>
                <PrimaryBtn lable="See details" />
                <button className='primaryBtn bg-[#ffffff2d] backdrop-blur-md'>
                    <GoLinkExternal className='text-2xl' />
                </button>
            </div>
        </div>
    </div>
  )
}

export default PortfolioCard