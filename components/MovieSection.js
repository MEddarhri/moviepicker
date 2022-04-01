import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { RiCloseCircleLine } from 'react-icons/ri';
import YouTube from 'react-youtube';
import { genres } from '../data/genres';

function MovieSection({ moviesData, getMovie, setMoviesData, urlTrailer }) {
  const [showTrailer, setShowTrailer] = useState(false);
  let description;
  function anotherMovie() {
    setMoviesData({});
    getMovie();
  }
  function handleToggleTrailer() {
    setShowTrailer((prev) => !prev);
  }

  if (moviesData.overview.length >= 200) {
    description = moviesData.overview.slice(0, 200) + '...';
  } else {
    description = moviesData.overview;
  }
  const opts = {
    width: '100%',

    playerVars: {
      autoplay: 1,
    },
  };

  const arrayGenres = moviesData.genre_ids
    .map((id) => {
      for (let i = 0; i < genres.length; i++) {
        if (genres[i].id === id) {
          return genres[i].name;
        }
      }
    })
    .join(', ');

  return (
    <div className='w-screen h-screen text-white sm:flex sm:items-center sm:justify-center'>
      {showTrailer && (
        <div className='absolute w-screen h-screen bg-[#0009] inset-0 z-[99] flex items-center  justify-center backdrop-blur-[4px]'>
          <div className='closeTrailer absolute right-0 top-0 p-4 '>
            <button onClick={handleToggleTrailer}>
              <RiCloseCircleLine className='text-red-500 text-3xl hover:text-red-700' />
            </button>
          </div>
          {urlTrailer == null && (
            <p className='md:text-2xl'>
              {`Sorry, we've got no trailer for this one`}
            </p>
          )}
          {urlTrailer && (
            <div className='max-w-[600px] w-full h-[390px]'>
              <YouTube videoId={urlTrailer} opts={opts} />
            </div>
          )}
        </div>
      )}
      <div className='max-w-[800px] w-full sm:rounded-[20px] bg-[#10101c] overflow-hidden sm:shadow-xl flex flex-col'>
        <div className='backdrop h-[230px] relative '>
          <p className='absolute left-4 top-4 lg:left-6 lg:top-5 text-[1.5rem] font-bold inter tracking-wider leading-[1.6rem] lg:leading-[1.8rem] opacity-90'>
            TEASER <br />
            TRAILER
          </p>
          <div className='absolute z-20 w-full h-[20px] bottom-0 rounded-tl-[20px] rounded-tr-[20px] bg-[#10101c]'></div>
          <img
            className='w-full h-full object-cover '
            src={`https://www.themoviedb.org/t/p/original${moviesData.backdrop_path}`}
            alt={moviesData.title}
          />
          <div
            className='trailer cursor-pointer z-10 absolute w-full h-full bg-[#0005] inset-0 flex items-center justify-center '
            onClick={handleToggleTrailer}
          >
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
            <p className='text-[#fff7] text-sm'>{arrayGenres}</p>
            {/* <p className='text-[#fff7] text-sm'>1h 41min</p> */}
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
