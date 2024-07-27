import React from 'react';
import Navbar from '../Components/HomePage/Navbar';
import WebDev from '../assets/WebDev.jpg';
import PowerBI from '../assets/Power_BI.png'
import '../CSS/Carousel.css';

function Project() {
  const images = [WebDev, PowerBI, WebDev, PowerBI, WebDev];

  return (
    <div className='flex flex-col '>
      <div>
        <Navbar />
      </div>
      <p className='flex justify-center text-blue-700 text-[30px] font-bold mt-5'>Projects</p>
      <div className='relative flex items-center justify-center bg-blue-700 p-3 overflow-hidden'>
        <div className='carousel'>
          {images.concat(images).map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} className='carousel-image' />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
