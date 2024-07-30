// BlogDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import BlogEntries from './BlogEntries';
 // Adjust the path if necessary
 import Footer from '../Components/HomePage/Footer'

function BlogDetail() {
  const { id } = useParams();
  const blog = BlogEntries.find((entry) => entry.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className='flex flex-col'>
        <div style={{ textAlign: 'center' }}>
      <p className='font-bold text-[25px]'>{blog.title}</p>
      <div className='flex justify-center'>
      <img src={blog.image} alt={blog.title} style={{ width: '50%', height: 'auto' }} />
      </div>
      <p>{blog.date}</p>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <p>{blog.content}</p>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default BlogDetail;
