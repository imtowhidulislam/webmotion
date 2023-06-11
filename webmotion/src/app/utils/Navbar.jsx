import React from 'react'
import Link from 'next/link';
import {BiAperture} from "react-icons/bi";
import {FiDribbble} from "react-icons/fi"
import {FaLinkedin,FaGithub} from "react-icons/fa"
import {BsFillCloudArrowUpFill} from "react-icons/bs"

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50  bg-[#a0a0a076] backdrop-blur-lg'>
      {/* For Letter use puspose... bg-[#a0a0a076] backdrop-blur-lg z-40 */}
      <div className='container flex items-center justify-between py-4 px-12 xl:px-0'>
        <div>
          <BiAperture className='text-4xl text-orange-600' />
        </div>

        <nav className='flex items-center justify-between'>
          <ul className='flex items-center justify-between gap-4'>
              <Link href="/">Home</Link>
              <Link href="/Movies">Movies</Link>
          </ul>
        </nav>

        <nav>
          <ul className='flex items-center gap-4'>
              <Link href="#">
                <FiDribbble />
              </Link>
              <Link href="#">
                <FaGithub />
              </Link>
              <Link href="#">
                <FaLinkedin />
              </Link>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar