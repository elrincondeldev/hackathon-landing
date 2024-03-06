import React from 'react';

function EmailSent() {
  return (
    <main className='flex flex-col items-center p-10 animate-in'>
      <div className='mt-6 flex flex-col max-w-xl gap-4 z-10 bg-white/5 p-6 rounded-md shadow-lg'>
        <h1 className='m-0 text-center text-3xl text-white'>
          La Hackathon Del Dev
        </h1>
        <p className='text-white'>
          Tu participación ha sido registrada. ¡Buena suerte! 🍀🎉
        </p>
      </div>
    </main>
  );
}

export default EmailSent;
