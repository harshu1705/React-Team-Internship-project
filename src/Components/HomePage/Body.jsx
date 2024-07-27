import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Laptop from '../HomePage/Laptop(changed color).png';

function Body() {
  return (
    <div className='flex w-full p-6 min-h-[90vh]  items-center'>
      <div className='flex w-[50%] pl-20 flex-col pt-3'>
        <ReactTypingEffect
          text={['Website', 'Website Development', 'Website Solutions']}
          speed={200}
          eraseSpeed={200}
          eraseDelay={200}
          typingDelay={500}
          className='text-[50px] font-bold text-dark-blue'
        />
        <p className='mt-4 leading-relaxed'>
        Welcome to TechSolve Solutions! We offer top-notch IT services designed to elevate your business. Our expertise includes comprehensive consulting, ensuring your technology strategy aligns with your goals. With our managed IT services, we handle all your technology needs, so you can focus on growing your business. We also provide advanced cloud solutions to improve scalability and flexibility. From infrastructure to support, TechSolve Solutions tailors its offerings to meet the unique demands of your organization. Let us partner with you to drive innovation and efficiency in your technology operations.
        </p>
      </div>
      <div className='flex w-[50%] justify-center items-center '>
        <img src={Laptop} alt='Laptop' className='max-w-full'/>
      </div>
    </div>
  );
}

export default Body;
