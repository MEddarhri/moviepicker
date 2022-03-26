import React from 'react';

function MovieGenre({ genre, index, sec, handleChange }) {
  return (
    <div className='relative  rounded-[8px] overflow-hidden outer-shadow'>
      <input
        className='absolute left-3 top-4'
        type='checkbox'
        id={`lbs${sec}-${index + 1}`}
        defaultChecked={false}
        name={genre.name}
        data-type='genre'
        onChange={handleChange}
      />
      <label
        className='text-sm text-[#fff5] rounded-[8px]  shadow-inset bg-[#2b2b38] block py-3 pl-10  '
        htmlFor={`lbs${sec}-${index + 1}`}
      >
        {genre.name}
      </label>
    </div>
  );
}

export default MovieGenre;
