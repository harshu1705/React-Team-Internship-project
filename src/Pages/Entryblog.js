
import React from 'react';
import './blogentry.css'; // Your CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css';
import myimage from '../assets/mountain.png'




const BlogEntry = ({ title }) => {
  return (
    <div className="blog-entry">

        <div className="blog-entry-left">
            <img src={myimage} alt='image' width={50} height={50}/>
            {/* add stars for rating it */}
        </div>
        <div className="blog-entry-right">
            <div className="Title font-bold">{title}</div>
            <p>This would be the content of the blog</p>

        </div>  
    
    </div>
  );
};

export default BlogEntry;
