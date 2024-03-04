import React from 'react';


const Hero = () => {
  return (
    <div className='text-base-content'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#506d65] font-bold p-2'>
            zawdelha ya samir ahhahahha 
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        azizz
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your projects wwith our platforms.</p>
        <button className='bg-accent w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-accent-content'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;