import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/HomePage/Navbar';
import Footer from '../Components/HomePage/Footer';
import event2 from '../assets/event2.jpg';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/users/blog'); 
        console.log('API Response:', response.data);

       
       
          setBlogs(response.data.data);
          
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col items-center gap-5 p-5">
        {blogs.map((blog) => (
          <div key={blog._id} className="flex w-full md:w-[50%] bg-dark-blue p-5 rounded-lg mb-5">
            <div className="flex-shrink-0">
              <img src={event2} width={300} height={300} alt="Event" />
            </div>
            <div className="flex flex-col ml-5">
              <p className="text-white font-bold text-xl">{blog.title}</p>
              <p className="text-white mt-2">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
      
    </div>
  );
}

export default Blog;
