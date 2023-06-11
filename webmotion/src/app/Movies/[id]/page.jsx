"use client";
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import Link from 'next/link';

const Page = ({params}) => {
    const [movieDetails, setMovieDetails] = useState([]);
    const movieId = params.id;

    const fetchMovie = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=68cb9ed528ca834ec647619501b03f57
        `);
        const data = await res.json();

        if(!res.ok) throw new Error("Movie not found");
        setMovieDetails([data]);
    }
    useEffect(() => {
        fetchMovie();
    },[])
    
    console.log(movieDetails);

    return (
        <div>
            <div className='grid grid-cols-responsiveLayout mx-8 gap-4'>
                {
                movieDetails.map(movie => {
                    const {id, poster_path,title,overview} = movie;
                    const movieImg = `https://image.tmdb.org/t/p/original${poster_path}`;
                    return (
                        <div key={id} className='flex gap-3 items-center bg-gray-900 p-4  rounded-lg'>
                            <div className='h-80 w-full overflow-hidden'>
                                <Image loader={() => movieImg} className='object-cover object-center rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md' src={movieImg} alt="movies poster" width={250} height={320} />
                            </div>
                            <div className='w-full'>
                                <h2 className='text-2xl mb-2 font-bold'>{title}</h2>
                                <h2 className='text-sm'>{overview}</h2>
                            </div>
                        </div>
                    )
                })
                }
            </div>

            <div className='flex items-center justify-center mt-8'>
                <Link href={`/Movies`} className='w-max bg-blue-700 capitalize rounded-full text-gray-50 font-bold py-4 px-12 cursor-pointer hover:bg-blue-300 hover:text-gray-800 transition-all duration-300 ease-in-out'>
                    Back To Movie
                </Link>
            </div>
        </div>
    )
}

export default Page