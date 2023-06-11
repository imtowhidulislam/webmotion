import React from 'react'
import {AiOutlineCopyrightCircle} from "react-icons/ai"
import {BsLinkedin,BsInstagram} from "react-icons/bs"
import {FaBehanceSquare} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='py-4 bg-orange-300'>
      <div className='container px-12 xl:px-0 flex items-center justify-between'>
        <h2 className='text-center capitalize flex items-center'>Copyright <span className='px-1'><AiOutlineCopyrightCircle /></span> all reserves to Web Motion</h2>
        <div className='flex items-center gap-2'>
          <h2 className='font-bold capitalize'>Follow me on</h2>
          <BsInstagram />
          <BsLinkedin />
          <FaBehanceSquare />
        </div>
      </div>
    </div>
  )
}

export default Footer