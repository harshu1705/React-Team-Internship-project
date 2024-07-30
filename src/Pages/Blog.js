// Blog.js
import React from 'react';

import BlogEntries from './BlogEntries';
import BlogEntry from './BlogEntry';// Adjust the path if necessary
import Navbar from '../Components/HomePage/Navbar';
import Footer from '../Components/HomePage/Footer'

function Blog() {
  return (
    <div className='flex flex-col'>
        <div className='flex'>
            <Navbar/>
        </div>
      <div className="our-blog"> Our Blog </div>
      <div className="flex-container">
        {BlogEntries.map((entry) => (
          <BlogEntry
            key={entry.id}
            id={entry.id}
            title={entry.title}
            image={entry.image}
            date={entry.date}
            content={entry.content}
          />
        ))}
      </div>
      <div>
            <Footer/>
      </div>
    </div>
  );
}

export default Blog;
