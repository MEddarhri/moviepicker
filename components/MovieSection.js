import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { GoRocket } from 'react-icons/go';

function MovieSection({ moviesData, getMovie, setMoviesData }) {
  let description;
  function anotherMovie() {
    setMoviesData({});
    getMovie();
  }

  if (moviesData.overview.length >= 200) {
    description = moviesData.overview.slice(0, 200) + '...';
  } else {
    description = moviesData.overview;
  }

  return (
    <div className='w-screen h-screen text-white sm:flex sm:items-center sm:justify-center'>
      <div className='max-w-[800px] w-full sm:rounded-[20px] bg-[#10101c] overflow-hidden sm:shadow-xl flex flex-col'>
        <div className='backdrop h-[230px] relative '>
          <div className='absolute z-20 w-full h-[20px] bottom-0 rounded-tl-[20px] rounded-tr-[20px] bg-[#10101c]'></div>
          <img
            className='w-full h-full object-cover '
            src={`https://www.themoviedb.org/t/p/original${moviesData.backdrop_path}`}
            alt={moviesData.title}
          />
          <div className='trailer cursor-pointer z-10 absolute w-full h-full bg-[#0005] inset-0 flex items-center justify-center '>
            <div className='play w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-blue-500 bg-opacity-50'>
              <FaPlay />
            </div>
          </div>
        </div>
        <div className='poster_and_details flex space-x-4 sm:space-x-8 px-4 sm:px-7'>
          <div className='poster-img relative z-30 w-[150px] sm:w-[170px] h-[230px] rounded-[10px] overflow-hidden translate-y-[-60px] shadow-lg flex-shrink-0'>
            <img
              className='w-full h-full object-cover'
              src={`https://www.themoviedb.org/t/p/original${moviesData.poster_path}`}
              alt={moviesData.title}
            />
          </div>
          <div className='title'>
            <h1 className='text-lg sm:text-2xl font-bold mb-3'>
              {moviesData.title}
            </h1>
            <div className='rating w-max flex items-center  space-x-1 px-1 rounded bg-blue-500 bg-opacity-60 mb-2 '>
              <FaStar className='text-lg text-[#ffe234]' />
              <p className='pt-[0.075rem]'>{moviesData.vote_average}</p>
            </div>
            <p className='text-[#fff7] text-sm'>Action & adventure, mystery</p>
            <p className='text-[#fff7] text-sm'>1h 41min</p>
          </div>
          <div className='!ml-auto pl-[30px] pt-10 hidden sm:block flex-shrink-0'>
            <button
              className='px-2 py-1  border-2 border-[#E54B4B] rounded-lg flex items-center  space-x-1 hover:bg-[#E54B4B] transition hover:shadow-lg'
              onClick={anotherMovie}
            >
              <p>Another go</p>
            </button>
          </div>
        </div>
        <div className='about px-4 sm:px-7 translate-y-[-40px]'>
          <h1 className='text-2xl text-[#E54B4B] font-bold mb-3'>
            About Movie
          </h1>
          <p>{description}</p>
        </div>
        <div className='mt-[30px] sm:hidden flex items-center justify-center flex-1'>
          <button
            className='px-2 py-1  border-2 border-[#E54B4B] rounded-lg flex items-center  space-x-1 hover:bg-[#E54B4B] transition hover:shadow-lg'
            onClick={anotherMovie}
          >
            <p className='text-lg'>Another go</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieSection;
