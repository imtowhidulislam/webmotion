import React from 'react'
import BlogCard from '../utils/BlogCard'
import AccentBtn from '../utils/AccentBtn'

const Blog = () => {
  return (
    <div>
        <div className='container px-12 xl:px-0 py-20'>
            <h2 className='skillTitle text-4xl font-extrabold capitalize mb-20'>Blog</h2>
            <div className='blogGrid'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
            <div className='grid place-content-center mt-16'>
                <AccentBtn lable="see all blog" />
            </div>
        </div>
    </div>
  )
}

export default Blog