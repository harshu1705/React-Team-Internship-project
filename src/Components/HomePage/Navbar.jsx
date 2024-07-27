import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from '../HomePage/LOGO.png'

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const navigate = useNavigate();
  function Event(){
    navigate('/Event');
  }
  function Project() {
    navigate('/Project');
  }

  function Home(){
    navigate('/');
  }

  function Blog(){
    navigate('/Blog');
  }
  function Review(){
    navigate('/Review');
  }

  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('about-us-section');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToContactUs=()=>{
    const contactUsSection=document.getElementById('contact-us-section');
    if(contactUsSection){
        contactUsSection.scrollIntoView({behaviour:'smooth'});
    }
  }

  return (
    <div className='flex w-full h-20'>
      <div className='flex w-[30%] justify-center gap-10 p-3'>
      <div className='flex h-16 '>
      <img src={Logo} alt='xyz '  />
      </div>
        <p className='text-lg pt-4 font-bold text-blue-700 '>INFOSYS COMPANY</p>
      </div>
      <div
        className='flex bg-blue-700 w-[5%] translate-x-[1px]'
        style={{ clipPath: 'polygon(100% 0, 100% 50%, 100% 100%, 5% 99%, 0 86%)' }}
      >
       
      </div>
      <div className='flex items-center bg-blue-700 w-[5%]'>
       
      </div>
      <div className='flex bg-blue-700 w-[60%] justify-between p-6 text-white '>
        <p className='hover:text-blue-300 cursor-pointer font-bold' onClick={Home}>Home</p>
        <p className='hover:text-blue-300 cursor-pointer font-bold' onClick={scrollToAboutUs}>About Us</p>
        <div className='flex gap-2 relative'>
          <p className='hover:text-blue-300 cursor-pointer font-bold'>Menu</p>
          <i className="fa-solid fa-angle-down  mt-1 cursor-pointer" onClick={toggleMenu}></i>
          {menuVisible && (
            <div className='absolute top-8 left-0 bg-white text-black p-2 shadow-lg w-24 z-10'>
              <p className='p-1 cursor-pointer hover:bg-blue-700 hover:text-white 'onClick={Event} >Events</p>
              <p className='p-1 cursor-pointer  hover:bg-blue-700 hover:text-white 'onClick={Project}>Projects</p>
              <p className='p-1 cursor-pointer  hover:bg-blue-700 hover:text-white ' onClick={Blog}>Blogs</p>
              <p className='p-1 cursor-pointer  hover:bg-blue-700 hover:text-white ' onClick={Review}>Reviews</p>
            </div>
          )}
        </div>
        <p className='hover:text-blue-300 cursor-pointer font-bold' onClick={scrollToContactUs}>Contact Us</p>
      </div>
    </div>
  );
}

export default Navbar;
