import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/HomePage/Navbar';
import Footer from '../Components/HomePage/Footer'
function EnterBlog() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
const navigate=useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        //used to stop default reloading
        try {
            const response = await axios.post('http://localhost:3000/api/v1/users/blog', formData); 
            console.log('Blog info:', response.data);
            alert('Blog details added')
            navigate('/Blog')
        } catch (error) {
            console.error('Error logging user:', error);
        }
    };

    return (
       <div className='flex flex-col gap-5'>
            <Navbar/>
            <div className='flex flex-col w-full gap-5 mt-5'>
            <p className='flex justify-center font-bold text-[25px] text-dark-blue'>INFORMATION OF BLOGS</p>
            <div className='flex flex-col justify-center'>
                <p className='flex mx-16 font-bold'>Title</p>
                <input
                    className='border-black border-2 p-5 mx-16 bg-slate-200 rounded-lg'
                    placeholder='TITLE'
                    name='title' // Add name attribute
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>
            <div className='flex flex-col justify-center'>
                <p className='flex mx-16 font-bold'>Description</p>
                <input
                    className='border-black border-2 p-8 mx-16 bg-slate-200 rounded-lg'
                    placeholder='DESCRIPTION'
                    name='description' // Add name attribute
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>
            <div className='flex justify-center'>
                <button
                    className='bg-dark-blue px-16 py-4 text-white rounded-lg'
                    onClick={handleSubmit}
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
