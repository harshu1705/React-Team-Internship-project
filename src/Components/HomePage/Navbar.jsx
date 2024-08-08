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
    navigate('/Home');
  }

  function Blog(){
    navigate('/Blog');
  }
  // function Review(){
  //   navigate('/Review');
  // }

  // function Research(){
  //   navigate('/Research');
  // }

  function Courses(){
    navigate('/courses')
  }
  function blogDetails(){
    navigate('/UpdateBlog')
  }
  
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
        <p className='text-[30px] pt-2 font-bold text-dark-blue '>XYZ COMPANY</p>
      </div>
      <div className='flex  items-end'>
        <div className='flex w-2 h-[18px] bg-dark-blue translate-x-[6px] rounded-l-full mt-12'>

        </div>

      </div>
      <div
        className='flex bg-dark-blue w-[4%] translate-x-[1px]'
        style={{ clipPath: 'polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 0 80%)',
       
      }}
      >
       
      </div>
      <div className='flex items-center bg-dark-blue w-[5%]'>
       
      </div>
      <div className='flex bg-dark-blue w-[60%] justify-between p-6 text-white '>
        <div className='flex gap-3'>
        <i class="fa-solid fa-house mt-1"></i>
        <p className='hover:text-blue-300 cursor-pointer font-bold ' onClick={Home}>Home</p>
        </div>
        <div className='flex gap-3'>
        <i class="fa-regular fa-folder-open mt-[6px]"></i>
        <p className='hover:text-blue-300 cursor-pointer font-bold' onClick={Courses}>Courses</p>

        </div>
        <div className='flex gap-2 relative'>
          <p className='hover:text-blue-300 cursor-pointer font-bold'>More</p>
          <i className="fa-solid fa-angle-down  mt-1 cursor-pointer" onClick={toggleMenu}></i>
          {menuVisible && (
            <div className='absolute top-8 left-0 bg-white text-black p-2 shadow-lg w-24 z-10'>
              <p className='p-1 cursor-pointer hover:bg-dark-blue hover:text-white 'onClick={Event} >Events</p>
              <p className='p-1 cursor-pointer  hover:bg-dark-blue hover:text-white 'onClick={Project}>Projects</p>
              <p className='p-1 cursor-pointer  hover:bg-dark-blue hover:text-white ' onClick={Blog}>Blogs</p>
              {/* <p className='p-1 cursor-pointer  hover:bg-dark-blue hover:text-white ' onClick={Review}>Reviews</p>
              <p className='p-1 cursor-pointer  hover:bg-dark-blue hover:text-white ' onClick={Research}>Research</p> */}
              <p className='p-1 cursor-pointer  hover:bg-dark-blue hover:text-white ' onClick={blogDetails}>Blog Details</p>
            </div>
          )}
        </div>
       <div className='flex gap-3'>
       <i class="fa-solid fa-phone mt-[6px]"></i>
       <p className='hover:text-blue-300 cursor-pointer font-bold' onClick={scrollToContactUs}>Contact Us</p>
       
       </div>
      </div>
    </div>
  );
}

export default Navbar;
