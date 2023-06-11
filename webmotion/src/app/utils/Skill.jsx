import React from 'react'
import {IoDesktop} from "react-icons/io"
import {FaDesktop} from "react-icons/fa"
import styles from "./Skill.module.css"


const Skill = () => {
    return (
        <div className={styles.skill}>
            <div className='grid place-items-center px-3 py-6 rounded-lg max-w-sm bg-[#385238]'>
                <div className='mb-2 w-max rounded-full'>
                    {/* <IoDesktop /> */}
                    <FaDesktop className='text-5xl text-green-400' />
                </div>
                <div className='mt-2'>
                    <h2 className='capitalize text-2xl  mb-2 text-center'>Social Media</h2>
                    <p className='text-sm text-center '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum ullam at, necessitatibus.</p>
                </div>
            </div>
        </div>
    )
}

export default Skill