import React from 'react';
import { genres } from '../data/genres';
import MovieGenre from './MovieGenre';

function RadioSelection2({ handleChange }) {
  return (
    <div className='max-w-[700px] w-full mx-auto'>
      {/* <img
        className='img-c1'
        src='/images/first-cover-sg3.jpg'
        alt='the batman'
      /> */}
      {/* <div className='glass'></div> */}
      <div className='px-3  relative z-[3] '>
        <h1 className='text-[1.5rem] sm:text-[2rem] inter sm:leading-9 text-white font-bold text-center mb-6'>
          {`Please choose any genre you're interested in.`}
        </h1>
        {/* <p className='text-xs  text-center mb-4 text-[#fff8] font-medium '>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
          perferendis!
        </p> */}
        <div className='grid grid-cols-2 md:grid-cols-3  auto-rows-max gap-2  pb-[40px] h-[50vh] md:h-auto overflow-scroll md:overflow-hidden'>
          {genres.map((genre, idx) => (
            <MovieGenre
              key={idx}
              genre={genre}
              index={idx}
              sec={2}
              handleChange={handleChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RadioSelection2;
