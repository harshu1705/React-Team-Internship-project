import React from 'react';

function Navbar() {
  return (
    <div className='flex w-full'>
      <div className='flex bg-white w-[30%] justify-between p-6'>
        <p>Logo</p>
        <p>Company</p>
      </div>
      <div
        className='flex bg-blue-700 w-[5%] '
        style={{ clipPath: 'polygon(100% 0, 100% 50%, 100% 100%, 5% 99%, 0 86%)' }}
      >
        
      </div>
      <div className='flex bg-blue-700 w-[5%]'>

      </div>
      <div className='flex bg-blue-700 w-[60%] justify-between p-6 text-white'>
        <p>Home</p>
        <p>About Us</p>
        <p>Menu</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
}

export default Navbar;
