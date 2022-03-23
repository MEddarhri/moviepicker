import React from 'react';
import { FaStar } from 'react-icons/fa';

function MovieSection() {
  return (
    <div className='w-screen h-screen text-white sm:flex sm:items-center sm:justify-center'>
      <div className='max-w-[680px] w-full sm:rounded-[20px] bg-[#10101c] overflow-hidden sm:shadow-2xl'>
        <div className='backdrop h-[230px] relative'>
          <div className='absolute  w-full h-[20px] bottom-0 rounded-tl-[20px] rounded-tr-[20px] bg-[#10101c]'></div>
          <img
            className='w-full h-full object-cover '
            src='https://image.tmdb.org/t/p/original/iPhDToxFzREctUA0ZQiYZamXsMy.jpg'
            alt='backdrop'
          />
        </div>
        <div className='poster_and_details flex space-x-4 px-5'>
          <div className='poster-img w-[150px] h-[230px] rounded-[10px] overflow-hidden translate-y-[-60px] shadow-lg flex-shrink-0'>
            <img
              className='w-full h-full object-cover'
              src='https://image.tmdb.org/t/p/original/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg'
              alt='poster'
            />
          </div>
          <div className='title'>
            <h1 className='text-2xl font-bold mb-3'>Turning Red</h1>
            <div className='rating w-max flex items-center  space-x-1 px-1 rounded bg-[#614de2] mb-2'>
              <FaStar />
              <p>9.6</p>
            </div>
            <p className='text-[#fff7] text-sm'>Action & adventure, mystery</p>
            <p className='text-[#fff7] text-sm'>1h 41min</p>
          </div>
        </div>
        <div className='about px-5 translate-y-[-40px]'>
          <h1 className='text-2xl text-[#614de2] font-bold mb-3'>
            About Movie
          </h1>
          <p>
            Thirteen-year-old Mei is experiencing the awkwardness of being a
            teenager with a twist – when she gets too excited, she transforms
            into a giant red panda
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieSection;
