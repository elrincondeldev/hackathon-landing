'use client';

import { useState } from 'react';
import EmailSent from '@/components/emailSent/EmailSent';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import CountDown from '@/components/countDown/CountDown';
import FernandoComponent from '@/components/fernando/FernandoComponent';
import Footer from '@/components/footer/Footer';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const notify = () => toast.error('Este email ya ha sido registrado.');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    setLoading(true);
    e.preventDefault();

    await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({ name, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data && data.name) {
          setSent(true);
          setName('');
          setEmail('');
        } else {
          notify();
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
    return true;
  };
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen animate-in'>
        {sent ? (
          <EmailSent />
        ) : (
          <main className='flex flex-col fixed items-center gap-10 p-10'>
            <div className='md:flex hidden flex-col place-items-center gap-4'>
              <h1 className='m-0 text-center text-7xl text-white'>
                La Hackathon Del Dev
              </h1>
              <div className='fixed bottom-0 right-20 w-[200px]'>
                <FernandoComponent />
              </div>
            </div>
            <div className='flex md:hidden flex-col place-items-center gap-4'>
              <h1 className='m-0 text-center text-3xl text-white'>
                La Hackathon Del Dev
              </h1>
            </div>
            <div className='relative flex flex-col gap-10 w-[100%] md:w-[80%]'>
              <CountDown />
              <form
                className='flex flex-col gap-4 z-10 w-[100%] bg-white/5 p-6 rounded-md shadow-lg'
                onSubmit={handleSubmit}
              >
                <label htmlFor='name' className='sr-only'>
                  Name
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  autoComplete='name'
                  required
                  value={name}
                  className='rounded-md bg-white/5 px-3.5 py-2.5 text-white ring-1 text-sm'
                  placeholder='Nombre'
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  value={email}
                  className='rounded-md bg-white/5 px-3.5 py-2.5 text-white ring-1 text-sm'
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type='submit'
                  className='flex justify-center rounded-md bg-[#2F8F62] border-[1px] border-[#33CA86] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#277952]'
                >
                  {loading ? (
                    <div
                      style={{
                        borderTopColor: 'transparent',
                      }}
                      className='w-4 h-4 border-2 border-white border-solid rounded-full animate-spin'
                    ></div>
                  ) : (
                    '¡Participo!'
                  )}
                </button>
              </form>
            </div>
          </main>
        )}
        <Toaster />
        <Footer />
      </div>
    </>
  );
}
