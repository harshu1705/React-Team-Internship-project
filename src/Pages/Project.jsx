import React from 'react';
import Navbar from '../Components/HomePage/Navbar';
import WebDev from '../assets/WebDev.jpg';
import PowerBI from '../assets/Power_BI.png'
import '../CSS/Carousel.css';

function Project() {
  const images = [WebDev, PowerBI, WebDev, PowerBI, WebDev];
  const ProjectCards=[
    {
        id:1,
        title:"Frontend Project",
        description:"This is a frontend development project with variety of styles,fonts,animations ",
        image:WebDev,
    },
    {
        id:2,
        title:"Power BI Project",
        description:"This is a Power BI project. It involves data visualization and creating interactive reports",
        image:PowerBI,
    },
    {
        id:3,
        title:"Frontend Project",
        description:"This is a frontend development project. It involves building the user interface and user experience",
        image:WebDev,
    },
    {
        id:4,
        title:"Power BI Project",
        description:"This is a Power BI project. It involves data visualization and creating interactive reports",
        image:PowerBI,
    },
    {
        id:5,
        title:"Frontend Project",
        description:"This is a frontend development project. It involves building the user interface and user experience",
        image:WebDev,
    },
    {
        id:4,
        title:"Power BI Project",
        description:"This is a Power BI project. It involves data visualization and creating interactive reports",
        image:PowerBI,
    },
  ]

  return (
    <div className='flex flex-col '>
      <div>
        <Navbar />
      </div>
      <p className='flex justify-center text-blue-700 text-[30px] font-bold mt-5 pb-3'>Projects</p>
      <div className='relative flex items-center justify-center bg-blue-700 p-3 overflow-hidden'>
        <div className='carousel'>
          {images.concat(images).map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} className='carousel-image' />
          ))}
        </div>
      </div>
      <div className='flex justify-center mt-5 text-blue-700 text-[25px] font-bold'>MORE ABOUT PROJECTS</div>
    <div className='flex  '>
        
        <div className='  grid grid-cols-3  w-full gap-5 p-5'>
        {ProjectCards.map((Project) => (
           <div className='flex  bg-blue-700 justify-between rounded-lg p-3'>
             <div className='flex flex-col gap-3 w-[80%]'>
             <p className='text-white text-bold text-[25px]'>{Project.title}</p>
             <p className='text-white'>{Project.description}</p>
            </div>
            <div className='flex w-16'>
                <img src={Project.image}/>
             </div>   
        </div>
              
            
            ))}
        </div>
   
    </div>
    </div>
  );
}

export default Project;
