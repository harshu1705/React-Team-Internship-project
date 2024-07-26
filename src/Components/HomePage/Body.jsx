import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Laptop from '../HomePage/Laptop (1).png';

function Body() {
  return (
    <div className='flex w-full p-6'>
      <div className='flex w-[50%] pl-20 flex-col pt-3'>
        <ReactTypingEffect
          text={['Website', 'Website Development', 'Website Solutions']}
          speed={200}
          eraseSpeed={200}
          eraseDelay={200}
          typingDelay={500}
          className='text-[50px] font-bold'
        />
        <p className='mt-4'>
          Welcome to TechSolve Solutions! We offer top-notch IT services including consulting, managed IT, and cloud solutions tailored to your business needs.
        </p>
      </div>
      <div className='flex w-[50%] justify-center items-center'>
        <img src={Laptop} alt='Laptop' className='max-w-full'/>
      </div>
    </div>
  );
}

export default Body;
