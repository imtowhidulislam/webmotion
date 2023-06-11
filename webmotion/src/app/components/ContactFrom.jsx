"use client"
import React, { useState } from 'react'
import PostBox from "../../../public/postbox.png";
import Image from 'next/image';
import AccentBtn from '../utils/AccentBtn';

const ContactFrom = () => {
    const [input, setInput] = useState({name:"",email:"",phone:"",messege:""})

    const handleChange = (e) => {}

    const handleSubmit = (e) => {}
   
  return (
    <div className='contact'>
        <div className='container px-12 xl:px-0 py-20 grid grid-cols-responsiveSkillCard place-items-center'>
            <div className='imgContainer'>
                <Image src={PostBox} width={300} height={300} />
            </div>
            <div className='content'>
                <h2 className='skillTitle text-4xl font-extrabold capitalize mb-4'>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name='name' value={input.name} placeholder='Name' onChange={handleChange} />
                    </div>
                    <div>
                        <input type="email" name='email' value={input.email} placeholder='E-mail' onChange={handleChange} />
                    </div>
                    <div>
                        <input type="phone" name='phone' value={input.phone} placeholder='phone' onChange={handleChange} />
                    </div>
                    <div>
                        <textarea rows="8" cols="33" text="text" name='messege' value={input.messege} placeholder='Name' onChange={handleChange} />
                    </div>
                    <div className='mt-4'>
                        <AccentBtn lable="Submit" />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactFrom