import React from 'react';
import { useNavigate } from 'react-router-dom';
import './blogentry.css';

const BlogEntry = ({ id, title, image, date }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="blog-entry" onClick={handleClick}>
      <div className="blog-entry-left">
        <img src={image} alt={title} width={100} height={100} />
        <div className="blog-date">{date}</div>
      </div>
      <div className="blog-entry-right">
        <div className="title font-bold">{title}</div>
        <p>This would be the content of the blog.</p>
      </div>
    </div>
  );
};

export default BlogEntry;
