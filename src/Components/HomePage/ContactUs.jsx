import React from 'react'

function ContactUs() {
  return (
    <div className='flex flex-col gap-7'>
        <div className='flex justify-center '>
        <p className='text-blue-700 flex  text-[30px] font-bold'>Contact Us</p>
        </div>
        <div className='flex justify-center gap-10'>
            <p className='text-blue-700 font-bold'>Name*:</p>
            <input
          type='text'
          id='name'
          className='border-2 border-black p-1 w-64 bg-gray-200'
          
        />
        </div>
        <div className='flex justify-center gap-10 mb-6'>
            <p className='text-blue-700 font-bold'>Email*:</p>
            <input
          type='text'
          id='name'
          className='border-2 border-black p-1 w-64 bg-gray-200'
          
        />
        </div>
    </div>
  )
}

export default ContactUs