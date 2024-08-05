import React from 'react'
import Girl from '../HomePage/Girl.png'
function AboutUs() {
  return (
    <div className= ' flex bg-dark-blue gap-2 flex-col p-2'>
      
        <div>
            <p className='text-white flex justify-center text-[30px] font-bold'>About Us</p>
        </div>
        <div className='flex justify-evenly '>
            <div className='flex flex-col' >
                <div className='flex w-40 h-40 bg-white p-4'>
                    <img src={Girl} alt='Girl'/>
                </div>
                <p className=' flex justify-center text-white'>Co-Founder</p>
            </div>
            <div className='flex flex-col' >
                <div className='flex w-40 h-40 bg-white p-4'>
                    <img src={Girl} alt='Girl'/>
                </div>
                <p className=' flex justify-center text-white'>Founder</p>
            </div>
            <div className='flex flex-col' >
                <div className='flex w-40 h-40 bg-white p-4'>
                    <img src={Girl} alt='Girl'/>
                </div>
                <p className=' flex justify-center text-white'>HR</p>
            </div>
            
        </div>
        <div className='flex justify-center'>
            <p className='text-white'>Delivering exceptional IT consulting, managed services, and cloud solutions to optimize and elevate your business.</p>
        </div>
    </div>
  )
}

export default AboutUs