import React from 'react';

function RadioSelection1() {
  return (
    <div className='max-w-[600px] w-full mx-auto'>
      {/* <img
        className='img-c1'
        src='/images/first-cover-sg3.jpg'
        alt='the batman'
      /> */}
      {/* <div className='glass'></div> */}
      <div className='px-3  relative z-[3] '>
        <h1 className='text-[1.5rem] sm:text-[2rem] sm:leading-10 text-white font-bold text-center mb-5 inter'>
          What comes closest to your occasion?
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
              name='lbs1'
              id='lbs1-1'
            />
            <label
              className='text-sm text-[#fff5] rounded-[8px] shadow-inset bg-[#2b2b38] block py-3 pl-10  '
              htmlFor='lbs1-1'
            >
              Just watching a movie by myself.
            </label>
          </div>
          <div className='relative  rounded-[8px] overflow-hidden outer-shadow'>
            <input
              className='absolute left-3 top-4'
              type='radio'
              name='lbs1'
              id='lbs1-2'
            />
            <label
              className='text-sm block rounded-[8px] shadow-inset text-[#fff5] bg-[#2b2b38] py-3 pl-10 '
              htmlFor='lbs1-2'
            >
              Movie Date.
            </label>
          </div>
          <div className='relative  rounded-[8px] overflow-hidden outer-shadow'>
            <input
              className='absolute left-3 top-4'
              type='radio'
              name='lbs1'
              id='lbs1-3'
            />
            <label
              className='text-sm block rounded-[8px] shadow-inset text-[#fff5] bg-[#2b2b38] py-3 pl-10 '
              htmlFor='lbs1-3'
            >
              Movie Night with friends.
            </label>
          </div>
          <div className='relative  rounded-[8px] overflow-hidden outer-shadow'>
            <input
              className='absolute left-3 top-4'
              type='radio'
              name='lbs1'
              id='lbs1-4'
            />
            <label
              className='text-sm block rounded-[8px] shadow-inset text-[#fff5] bg-[#2b2b38] py-3 pl-10 '
              htmlFor='lbs1-4'
            >
              Date Night with boyfriend or girlfriend.
            </label>
          </div>
          <div className='relative  rounded-[8px] overflow-hidden outer-shadow'>
            <input
              className='absolute left-3 top-4'
              type='radio'
              name='lbs1'
              id='lbs1-5'
            />
            <label
              className='text-sm block rounded-[8px] shadow-inset text-[#fff5] bg-[#2b2b38] py-3 pl-10 '
              htmlFor='lbs1-5'
            >
              Watching a movie with family or relatives.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadioSelection1;
