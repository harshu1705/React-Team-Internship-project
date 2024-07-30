import React from 'react';
import { useParams } from 'react-router-dom';
import blogEntries from './Blog'; // Assuming the blogEntries array is exported from Blog.js

function BlogDetail() {
  const { id } = useParams();
  const blog = blogEntries.find((entry) => entry.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} style={{ width: '50%', height: 'auto' }} />
      <p>{blog.date}</p>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <p>{blog.content}</p>
      </div>
    </div>
  );
}

export default BlogDetail;
