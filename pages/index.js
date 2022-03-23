import { useRef, useState } from 'react';
import RadioSelection1 from '../components/RadioSelection1';
import { BiArrowBack } from 'react-icons/bi';
import RadioSelection2 from '../components/RadioSelection2';
import RadioSelection3 from '../components/RadioSelection3';
import RadioSelection4 from '../components/RadioSelection4';
import RadioSelection5 from '../components/RadioSelection5';

export default function Home() {
  const cont = useRef(null);
  const [pos, setPos] = useState(0);

  function handleNext() {
    switch (pos) {
      case 0:
        cont.current.style.transform = 'translateX(-100%)';
        break;
      case 1:
        cont.current.style.transform = 'translateX(-200%)';
        break;
      case 2:
        cont.current.style.transform = 'translateX(-300%)';
        break;
      case 3:
        cont.current.style.transform = 'translateX(-400%)';
        break;
    }
    if (pos >= 0 && pos <= 3) {
      setPos((prev) => prev + 1);
    }
  }

  function handlePrev() {
    switch (pos) {
      case 4:
        cont.current.style.transform = 'translateX(-300%)';
        break;
      case 3:
        cont.current.style.transform = 'translateX(-200%)';
        break;
      case 2:
        cont.current.style.transform = 'translateX(-100%)';
        break;
      case 1:
        cont.current.style.transform = 'translateX(0)';
        break;
    }
    if (pos >= 1 && pos <= 4) {
      setPos((prev) => prev - 1);
    }
  }

  return (
    <div className=' relative w-screen min-h-screen overflow-hidden inter sc-1'>
      <p className='absolute text-sm top-4 left-[50%] z-50 font-semibold translate-x-[-50%] text-white'>
        {`${pos + 1} / 5`}
      </p>
      <button
        className='absolute bottom-4 right-4 lg:right-[30vw] lg:bottom-[2vw] z-50 text-sm px-2 py-1 rounded-[5px] bg-[#ff715b] font-bold text-[#FFFFFF] '
        onClick={handleNext}
      >
        Next
      </button>
      {pos > 0 && (
        <button
          className='absolute bottom-4 left-4 lg:left-[30vw] lg:bottom-[2vw] z-50'
          onClick={handlePrev}
        >
          <BiArrowBack className='text-[1.4rem] text-[#fff]' />
        </button>
      )}
      <div className='relative transition duration-300' ref={cont}>
        <div className='first  absolute top-0 left-0 w-screen min-h-screen flex items-center  '>
          <RadioSelection1 />
        </div>
        <div className='second absolute top-0 left-[100vw] w-screen min-h-screen flex   items-center '>
          <RadioSelection2 />
        </div>
        <div className='second absolute top-0 left-[200vw] w-screen min-h-screen flex items-center justify-center  '>
          <RadioSelection3 />
        </div>
        <div className='second absolute top-0 left-[300vw] w-screen min-h-screen flex items-center justify-center  '>
          <RadioSelection4 />
        </div>
        <div className='second absolute top-0 left-[400vw] w-screen min-h-screen flex items-center justify-center  '>
          <RadioSelection5 />
        </div>
      </div>
    </div>
  );
}
