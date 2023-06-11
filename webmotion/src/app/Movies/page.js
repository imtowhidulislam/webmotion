"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react'
const url = "https://api.themoviedb.org/3/movie/popular?api_key=68cb9ed528ca834ec647619501b03f57";
// const url = "http://www.omdbapi.com/?apikey=8116276c";

const Page = () => {
  const [movie, setMovie] = useState([]);

  const getMovies = async (url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();
      
      if(!res.ok) throw new Error("Perhaps the url might be corrupted");

      setMovie(data.results);
    }catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    getMovies(url);
  },[])

  console.log(movie);

  return (
    <div>
      <div className='grid grid-cols-responsiveLayout mx-8 gap-4'>
        {
          movie.map(movie => {
            const {id, poster_path,title,overview} = movie;
            const movieImg = `https://image.tmdb.org/t/p/original${poster_path}`;
            return (
              <div key={id}>
                <Link href={`/Movies/${id}`} className='flex gap-3 items-center bg-gray-900 p-4  rounded-lg'>
                  <div className='h-80 w-full overflow-hidden'>
                      <Image loader={() => movieImg} className='object-cover object-center rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md' src={movieImg} alt="movies poster" width={250} height={320} />
                  </div>
                  <div className='w-full'>
                      <h2 className='text-2xl mb-2 font-bold'>{title}</h2>
                      <h2 className='text-sm'>{overview}</h2>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Page