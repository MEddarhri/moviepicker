import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { GoRocket } from 'react-icons/go';

function MovieSection({
  moviesData,
  getMovie,
  setMoviesData,
  setTotalPages,
  setCurrentIndex,
  setCurrentPage,
}) {
  function anotherMovie() {
    setMoviesData([]);
    getMovie();
  }

  return (
    <div className='w-screen h-screen text-white sm:flex sm:items-center sm:justify-center'>
      <div className='max-w-[800px] w-full sm:rounded-[20px] bg-[#10101c] overflow-hidden sm:shadow-xl flex flex-col'>
        <div className='backdrop h-[230px] relative '>
          <div className='absolute z-20 w-full h-[20px] bottom-0 rounded-tl-[20px] rounded-tr-[20px] bg-[#10101c]'></div>
          <img
            className='w-full h-full object-cover '
            src={`https://www.themoviedb.org/t/p/original${moviesData.backdrop_path}`}
            alt={moviesData.original_title}
          />
          <div className='trailer cursor-pointer z-10 absolute w-full h-full bg-[#0005] inset-0 flex items-center justify-center '>
            <div className='play w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-blue-500 bg-opacity-50'>
              <FaPlay />
            </div>
          </div>
        </div>
        <div className='poster_and_details flex space-x-4 px-7'>
          <div className='poster-img relative z-30 w-[150px] h-[230px] rounded-[10px] overflow-hidden translate-y-[-60px] shadow-lg flex-shrink-0'>
            <img
              className='w-full h-full object-cover'
              src={`https://www.themoviedb.org/t/p/original${moviesData.poster_path}`}
              alt={moviesData.original_title}
            />
          </div>
          <div className='title'>
            <h1 className='text-2xl font-bold mb-3'>
              {moviesData.original_title}
            </h1>
            <div className='rating w-max flex items-center  space-x-1 px-1 rounded bg-[#614de2] mb-2'>
              <FaStar className='text-lg' />
              <p className='pt-[0.075rem]'>{moviesData.vote_average}</p>
            </div>
            <p className='text-[#fff7] text-sm'>Action & adventure, mystery</p>
            <p className='text-[#fff7] text-sm'>1h 41min</p>
          </div>
          <div className='!ml-auto pt-10 hidden sm:block flex-shrink-0'>
            <button
              className='px-2 py-1  border-2 border-[#614de2] rounded-lg flex items-center  space-x-1'
              onClick={anotherMovie}
            >
              <p>Another go</p>
              <GoRocket className='text-xs' />
            </button>
          </div>
        </div>
        <div className='about px-7 translate-y-[-40px]'>
          <h1 className='text-2xl text-[#614de2] font-bold mb-3'>
            About Movie
          </h1>
          <p>{moviesData.overview}</p>
        </div>
        <div className='mt-[30px] sm:hidden flex items-center justify-center flex-1'>
          <button className='px-2 py-1  border-2 border-[#614de2] rounded-lg flex items-center  space-x-1'>
            <p>Another go</p>
            <GoRocket className='text-xs' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieSection;
