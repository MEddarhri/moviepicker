import React from 'react';

function RadioSelection4({ handleChange, formData }) {
  return (
    <div className='max-w-[630px] w-full mx-auto'>
      {/* <img
        className='img-c1'
        src='/images/first-cover-sg3.jpg'
        alt='the batman'
      /> */}
      {/* <div className='glass'></div> */}
      <div className='px-3  relative z-[3] '>
        <h1 className='text-[1.5rem] sm:text-[2rem] sm:leading-10 text-white font-bold text-center mb-5 inter'>
          {`Please select all MPAA ratings that you're okay with.`}
        </h1>
        {/* <p className='text-xs  text-center mb-4 text-[#fff8] font-medium '>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
          perferendis!
        </p> */}
        <div className='flex flex-col space-y-2 pb-[40px]'>
          <div className='relative  rounded-[8px] overflow-hidden outer-shadow'>
            <input
              className='absolute left-3 top-4'
              type='radio'
              name='lbs4'
              id='lbs4-1'
              data-type='age'
              data-value='g-rated'
              checked={formData.age == 'g-rated'}
              onChange={handleChange}
            />
            <label
              className='text-sm text-[#fff5] rounded-[8px] shadow-inset bg-[#2b2b38] block py-3 pl-10  '
              htmlFor='lbs4-1'
            >
              G-Rated: All ages admitted.
            </label>
          </div>
          <div className='relative  rounded-[8px] overflow-hidden outer-shadow'>
            <input
              className='absolute left-3 top-4'
              type='radio'
              name='lbs4'
              id='lbs4-2'
              data-type='age'
              data-value='pg-rated'
              checked={formData.age == 'pg-rated'}
              onChange={handleChange}
            />
            <label
              className='text-sm block rounded-[8px] shadow-inset text-[#fff5] bg-[#2b2b38] py-3 pl-10 '
              htmlFor='lbs4-2'
            >
              PG-Rated: Some material may not be suitable for children.
            </label>
          </div>
          <div className='relative  rounded-[8px] overflow-hidden outer-shadow'>
            <input
              className='absolute left-3 top-4'
              type='radio'
              name='lbs4'
              id='lbs4-3'
              data-type='age'
              data-value='pg-13-rated'
              checked={formData.age == 'pg-13-rated'}
              onChange={handleChange}
            />
            <label
              className='text-sm block rounded-[8px] shadow-inset text-[#fff5] bg-[#2b2b38] py-3 pl-10 '
              htmlFor='lbs4-3'
            >
              PG-13-Rated: Some material may be inappropriate for children under
              13.
            </label>
          </div>
          <div className='relative  rounded-[8px] overflow-hidden outer-shadow'>
            <input
              className='absolute left-3 top-4'
              type='radio'
              name='lbs4'
              id='lbs4-4'
              data-type='age'
              data-value='r-rated'
              checked={formData.age == 'r-rated'}
              onChange={handleChange}
            />
            <label
              className='text-sm block rounded-[8px] shadow-inset text-[#fff5] bg-[#2b2b38] py-3 pl-10 '
              htmlFor='lbs4-4'
            >
              R-Rated: Under 17 requires accompanying parent or adult guardian.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadioSelection4;
