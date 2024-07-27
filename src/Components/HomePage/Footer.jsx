import React from 'react'

function Footer() {
  return (
    <div className='flex bg-dark-blue  flex-col p-6'>
        <div className='flex bg-dark-blue justify-evenly '>
        <div className='flex flex-col'>
            <p className='text-white text-lg font-bold'>About</p>
            <p className='text-white'>About</p>
            <p className='text-white'>Blog</p>
            <p className='text-white'>Privacy Policy</p>
            <p className='text-white'>Terms of service</p>
        </div>
        <div className='flex flex-col'>
            <p className='text-white text-lg font-bold'>Contact</p>
            <div className='flex gap-2 '>
            <i class="fa-solid fa-phone mt-1 text-white" ></i>
            <p className='text-white '>+91 9892895541</p>
            </div>

            <div className='flex gap-2 '>
            <i class="fa-regular fa-envelope mt-2 text-white"></i>
            <p className='text-white '>xyz123@gmail.com</p>
            </div>
        </div>
        <div className='flex flex-col gap-3'>
           <div className='flex items-center'>
           <p className='text-white text-lg font-bold'>Connect</p>
           </div>
           <div className="flex gap-5 text-[25px]">
            <i class="fa-brands fa-facebook text-white"></i>
            <i class="fa-brands fa-instagram text-white"></i>
            <i class="fa-brands fa-linkedin text-white"></i>
           </div>
           <div className="flex gap-5 text-[25px]">
           <i class="fa-brands fa-whatsapp text-white"></i>
           <i class="fa-solid fa-location-dot text-white"></i>
           </div>
        </div>
       
    </div>
    <div className='flex justify-center'>
        <p className='text-white'>© 1996-2024,xyz.com, Inc. or its affiliates</p>
    </div>
    </div>
  )
}

export default Footer