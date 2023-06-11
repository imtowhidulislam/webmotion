import React from 'react'
import Light from "../../../public/bulb.png"
import Star from "../../../public/star.png"
import PrimaryBtn from '../utils/PrimaryBtn'
import Image from 'next/image'

const Bulb = () => {
  return (
    <div className='bulb my-12'>
        <div className='container px-12 xl:px-0 grid grid-cols-responsiveHeader gap-20 place-items-center'>
            <div className='bulbContainer1'>
                <Image src={Light} alt="" width={200} height={300}/>
            </div>
            <div className='bulbContainer2'>
                <Image src={Light} alt="" width={200} height={300}/>
            </div>
            <div className='star'>
                <Image src={Star} width={100} height={100}></Image>
            </div>
            <div>
                <h2 className='text-4xl capitalize font-extrabold leading-10 mb-4'>Think smartly to generate awesome notion.</h2>
                <p className='capitalize font-light text-gray-300 mb-8'>Lorem ipsum dolor sit. <strong>feelancer!</strong></p>
                <div>
                    <PrimaryBtn lable="Contact me" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bulb