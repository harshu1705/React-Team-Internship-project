import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/HomePage/Navbar';
import Footer from '../Components/HomePage/Footer';
import event2 from '../assets/event2.jpg';
import { useNavigate } from 'react-router-dom';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const navigate=useNavigate();

  function moveToUpdateBlog(id){
    navigate(`/EnterBlog/${id}`)
  }
  function handleReviews(id){
    navigate(`/Review/${id}`)
  }
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
  //[] to render only once

  const deleteBlogId=async(id)=>{
    try{
      await axios.delete(`http://localhost:3000/api/v1/users/blog/${id}`)
      setBlogs(blogs.filter(blog => blog._id !== id));
    }
    catch(error){
      console.error('Error:',error)
    }
  }

  

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
            <div className='flex gap-5 justify-end text-white'>
            <i class="fa-solid fa-pen cursor-pointer" onClick={()=>moveToUpdateBlog(blog._id)}>
            </i>
            <i class="fa-solid fa-trash cursor-pointer"  onClick={() => deleteBlogId(blog._id)} ></i>
          </div> 
              <p className="text-white font-bold text-2xl">{blog.title}</p>
              <p className="text-white mt-2">{blog.description}</p>
              <p className='font-bold text-white flex justify-end cursor-pointer' onClick={()=>handleReviews(blog._id)}>ADD REVIEWS</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
      
    </div>
  );
}

export default Blog;
