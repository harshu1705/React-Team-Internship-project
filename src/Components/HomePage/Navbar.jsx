import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const navigate = useNavigate();
  function Project() {
    navigate('/Project');
  }

  function Blog(){
    navigate('/Blog');
  }
  function Review(){
    navigate('/Review');
  }

  return (
    <div className='flex w-full'>
      <div className='flex w-[30%] justify-center gap-10 p-6'>
        <p className='text-lg'> Logo</p>
        <p className='text-lg '>Company Name</p>
      </div>
      <div
        className='flex bg-blue-700 w-[5%]'
        style={{ clipPath: 'polygon(100% 0, 100% 50%, 100% 100%, 5% 99%, 0 86%)' }}
      >
       
      </div>
      <div className='flex bg-blue-700 w-[5%]'>
       
      </div>
      <div className='flex bg-blue-700 w-[60%] justify-between p-6 text-white '>
        <p className='hover:text-blue-300 cursor-pointer'>Home</p>
        <p className='hover:text-blue-300 cursor-pointer'>About Us</p>
        <div className='flex gap-2 relative'>
          <p className='hover:text-blue-300 cursor-pointer'>Menu</p>
          <i className="fa-solid fa-angle-down  mt-1 cursor-pointer" onClick={toggleMenu}></i>
          {menuVisible && (
            <div className='absolute top-8 left-0 bg-white text-black p-2 shadow-lg w-24'>
              <p className='p-1 cursor-pointer hover:bg-blue-700 hover:text-white ' >Events</p>
              <p className='p-1 cursor-pointer  hover:bg-blue-700 hover:text-white 'onClick={Project}>Projects</p>
              <p className='p-1 cursor-pointer  hover:bg-blue-700 hover:text-white ' onClick={Blog}>Blogs</p>
              <p className='p-1 cursor-pointer  hover:bg-blue-700 hover:text-white ' onClick={Review}>Reviews</p>
            </div>
          )}
        </div>
        <p className='hover:text-blue-300 cursor-pointer'>Contact Us</p>
      </div>
    </div>
  );
}

export default Navbar;
