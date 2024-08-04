// Blog.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/HomePage/Navbar';
import Footer from '../Components/HomePage/Footer';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/users/blog'); 
        
        // Update the API endpoint
        console.log(response.data)
        setBlogs(response.data); // Set blogs from API response
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className='flex flex-col'>
        <div className='flex'>
            <Navbar />
        </div>
      <div className="our-blog">Our Blog</div>
      <div className="flex-container">
        {blogs.map((entry) => (
          <div key={entry._id} className='flex flex-col mb-4 p-4 border rounded-lg'>
            <img src={entry.image} alt={entry.title} width={100} height={100} className='mb-2' />
            <div className='font-bold text-lg'>{entry.title}</div>
            <div className='text-gray-500'>{entry.date}</div>
            <p className='mt-2'>{entry.content}</p>
          </div>
        ))}
      </div>
      <div>
            <Footer />
      </div>
    </div>
  );
}

export default Blog;
