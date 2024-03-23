'use client';

import React from 'react';
import Countdown from 'react-countdown';

function CountDown() {
  const march24 = new Date('2024-03-24T18:00:00').getTime();

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    return (
      <>
        <div className='md:flex hidden justify-center text-white gap-2 bg-white/5 p-6 rounded-md shadow-lg'>
          <div className='flex flex-col items-center gap-5'>
            <span className='text-7xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text'>
              {days}
            </span>
            <span className='text-3xl'>Días</span>
          </div>
          <span className='text-7xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text'>
            :
          </span>
          <div className='flex flex-col items-center gap-5'>
            <span className='text-7xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text'>
              {hours}
            </span>
            <span className='text-3xl'>Horas</span>
          </div>
          <span className='text-7xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text'>
            :
          </span>
          <div className='flex flex-col items-center gap-5'>
            <span className='text-7xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text'>
              {minutes}
            </span>
            <span className='text-3xl'>Minutos</span>
          </div>
          <span className='text-7xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text'>
            :
          </span>
          <div className='flex flex-col items-center gap-5'>
            <span className='text-7xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text'>
              {seconds}
            </span>
            <span className='text-3xl'>Segundos</span>
          </div>
        </div>
        <div className='flex md:hidden text-white bg-white/5 p-6 rounded-md shadow-lg'>
          <div className='flex flex-col items-center gap-2'>
            <span className='text-5xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text'>
              {days}
            </span>
            <span className='text-xl'>Días</span>
          </div>
          <span className='text-5xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text'>
            :
          </span>
          <div className='flex flex-col items-center gap-2'>
            <span className='text-5xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text'>
              {hours}
            </span>
            <span className='text-xl'>Horas</span>
          </div>
          <span className='text-5xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text'>
            :
          </span>
          <div className='flex flex-col items-center gap-2'>
            <span className='text-5xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text'>
              {minutes}
            </span>
            <span className='text-xl'>Minutos</span>
          </div>
          <span className='text-5xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text'>
            :
          </span>
          <div className='flex flex-col items-center gap-2'>
            <span className='text-5xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text'>
              {seconds}
            </span>
            <span className='text-xl'>Segundos</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <Countdown date={march24} renderer={renderer} />
    </div>
  );
}

export default CountDown;
