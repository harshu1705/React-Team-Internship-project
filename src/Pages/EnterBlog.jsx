import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/HomePage/Navbar';
import Footer from '../Components/HomePage/Footer'
function EnterBlog() {
   

    return (
       <div className='flex flex-col gap-5'>
            <Navbar/>
            <div className='flex flex-col w-full gap-5 mt-5'>
            <p className='flex justify-center font-bold text-[25px] text-dark-blue'>UPDATE BLOGS</p>
            <div className='flex flex-col justify-center'>
                <p className='flex mx-16 font-bold'>Title</p>
                <input
                    className='border-black border-2 p-5 mx-16 bg-slate-200 rounded-lg'
                    placeholder='TITLE'
                    name='title' 
                    
                />
            </div>
            <div className='flex flex-col justify-center'>
                <p className='flex mx-16 font-bold'>Description</p>
                <input
                    className='border-black border-2 p-8 mx-16 bg-slate-200 rounded-lg'
                    placeholder='DESCRIPTION'
                    name='description'
                   
                />
            </div>
            <div className='flex justify-center'>
                <button
                    className='bg-dark-blue px-16 py-4 text-white rounded-lg'
                    
                >
                    Submit
                </button>
            </div>
        </div>
           <div className='mt-8'>
           <Footer />
           </div>
       </div>
    );
}

export default EnterBlog;
