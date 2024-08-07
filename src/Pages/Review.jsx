import React from 'react';
import Navbar from '../Components/HomePage/Navbar';

function Review() {
  return (
    <div className='flex flex-col gap-5 items-center'> 
      <Navbar />
      <p className='text-dark-blue font-bold flex justify-center text-[30px]'>
        REVIEWS
      </p>
      <div className='flex flex-col items-center w-full'> 
        <p className='mb-2 font-bold text-dark-blue'>ADD YOUR REVIEW....</p>
        <textarea
          type='text'
          placeholder='Write your reviews....'
          className='p-2  rounded-lg w-1/2 border-dark-blue border-[5px] pb-36' 
        />
      </div>
    </div>
  );
}

export default Review;
