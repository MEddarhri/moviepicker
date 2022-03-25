import { useRef, useState } from 'react';
import RadioSelection1 from '../components/RadioSelection1';
import { BiArrowBack } from 'react-icons/bi';
import RadioSelection2 from '../components/RadioSelection2';
import RadioSelection3 from '../components/RadioSelection3';
import RadioSelection4 from '../components/RadioSelection4';
import RadioSelection5 from '../components/RadioSelection5';
import MovieSection from '../components/MovieSection';

export default function Home() {
  const cont = useRef(null);
  const [pos, setPos] = useState(0);
  const [moviesData, setMoviesData] = useState([]);

  const condition = pos > 0 && pos <= 5;

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
      case 4:
        cont.current.style.transform = 'translateX(-500%)';
        break;
    }
    if (pos >= 0 && pos <= 4) {
      setPos((prev) => prev + 1);
    }
    if (pos === 4) {
      getMovie();
    }
  }

  function handlePrev() {
    switch (pos) {
      case 5:
        cont.current.style.transform = 'translateX(-400%)';
        break;
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
    if (pos >= 1 && pos <= 5) {
      setPos((prev) => prev - 1);
    }
  }

  async function getMovie() {
    try {
      const res = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=f564669bc935c1eb03e8e8e4824ca301&primary_release_year=2022'
      );
      const data = await res.json();
      console.log(data);
      setMoviesData(data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(moviesData);

  return (
    <div className=' relative w-screen min-h-screen overflow-hidden nunito sc-1'>
      {pos !== 5 && (
        <p className='absolute text-sm top-4 left-[50%] z-50 font-semibold translate-x-[-50%] text-white'>
          {`${pos + 1} / 5`}
        </p>
      )}
      {pos !== 5 && (
        <button
          className='absolute bottom-10 text-[1.1rem]  right-4 lg:right-[30vw] lg:bottom-[2vw] z-50 text-sm px-3 py-2 rounded-[5px] bg-[#ff715b] font-bold text-[#FFFFFF] '
          onClick={handleNext}
        >
          Next
        </button>
      )}
      {condition && (
        <button
          className='absolute bottom-11 left-4 lg:left-[30vw] lg:bottom-[2vw] z-50'
          onClick={handlePrev}
        >
          <BiArrowBack className='text-[1.7rem] text-[#fff]' />
        </button>
      )}
      <div className='relative transition duration-300 ease-out' ref={cont}>
        <div className='  absolute top-0 left-0 w-screen min-h-screen flex items-center  '>
          <RadioSelection1 />
        </div>
        <div className=' absolute top-0 left-[100vw] w-screen min-h-screen flex   items-center '>
          <RadioSelection2 />
        </div>
        <div className=' absolute top-0 left-[200vw] w-screen min-h-screen flex items-center justify-center  '>
          <RadioSelection3 />
        </div>
        <div className=' absolute  top-0 left-[300vw] w-screen min-h-screen flex items-center justify-center  '>
          <RadioSelection4 />
        </div>
        <div className=' absolute top-0 left-[400vw] w-screen min-h-screen flex items-center justify-center  '>
          <RadioSelection5 />
        </div>
        <div className=' absolute top-0 left-[500vw] w-screen min-h-screen bg-[#10101c] sm:bg-[#252A34] '>
          {moviesData.results && <MovieSection />}
          {moviesData.length == 0 && (
            <div className='w-full h-screen flex items-center justify-center'>
              <div className='lds-roller'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
