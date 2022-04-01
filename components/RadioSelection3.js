import React from 'react';

function RadioSelection3({ handleChange, formData }) {
  return (
    <div className='max-w-[600px] w-full mx-auto'>
      {/* <img
        className='img-c1'
        src='/images/first-cover-sg3.jpg'
        alt='the batman'
      /> */}
      {/* <div className='glass'></div> */}
      <div className='px-3  relative z-[3] '>
        <h1 className='text-[1.5rem] text-white font-bold text-center mb-5 inter'>
          How old would you like the movie to be?
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
              name='lbs3'
              id='lbs3-1'
              data-type='year'
              data-value='dm'
              checked={formData.year == 'dm'}
              onChange={handleChange}
            />
            <label
              className='text-sm text-[#fff5] rounded-[8px] shadow-inset bg-[#2b2b38] block py-3 pl-10  '
              htmlFor='lbs3-1'
            >
              {`Doesn't matter.`}
            </label>
          </div>
          <div className='relative  rounded-[8px] overflow-hidden outer-shadow'>
            <input
              className='absolute left-3 top-4'
              type='radio'
              name='lbs3'
              id='lbs3-2'
              data-type='year'
              data-value='l2'
              checked={formData.year == 'l2'}
              onChange={handleChange}
            />
            <label
              className='text-sm block rounded-[8px] shadow-inset text-[#fff5] bg-[#2b2b38] py-3 pl-10 '
              htmlFor='lbs3-2'
            >
              Published in 2021 or 2022.
            </label>
          </div>
          <div className='relative  rounded-[8px] overflow-hidden outer-shadow'>
            <input
              className='absolute left-3 top-4'
              type='radio'
              name='lbs3'
              id='lbs3-3'
              data-type='year'
              data-value='l3'
              checked={formData.year == 'l3'}
              onChange={handleChange}
            />
            <label
              className='text-sm block rounded-[8px] shadow-inset text-[#fff5] bg-[#2b2b38] py-3 pl-10 '
              htmlFor='lbs3-3'
            >
              Published in the last 3 years.
            </label>
          </div>
          <div className='relative  rounded-[8px] overflow-hidden outer-shadow'>
            <input
              className='absolute left-3 top-4'
              type='radio'
              name='lbs3'
              id='lbs3-4'
              data-type='year'
              data-value='l5'
              checked={formData.year == 'l5'}
              onChange={handleChange}
            />
            <label
              className='text-sm block rounded-[8px] shadow-inset text-[#fff5] bg-[#2b2b38] py-3 pl-10 '
              htmlFor='lbs3-4'
            >
              Published in the last 5 years.
            </label>
          </div>
          <div className='relative  rounded-[8px] overflow-hidden outer-shadow'>
            <input
              className='absolute left-3 top-4'
              type='radio'
              name='lbs3'
              id='lbs3-5'
              data-type='year'
              data-value='l10'
              checked={formData.year == 'l10'}
              onChange={handleChange}
            />
            <label
              className='text-sm block rounded-[8px] shadow-inset text-[#fff5] bg-[#2b2b38] py-3 pl-10 '
              htmlFor='lbs3-5'
            >
              Published in the last 10 years.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadioSelection3;
