// // BlogDetail.js
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Footer from '../Components/HomePage/Footer';

// function BlogDetail() {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/api/v1/users/blog/${id}`); // Update the API endpoint
//         setBlog(response.data.data); // Adjust based on the structure of the response
//       } catch (error) {
//         console.error('Error fetching blog:', error);
//       }
//     };

//     fetchBlog();
//   }, [id]);

//   if (!blog) {
//     return <div>Blog not found</div>;
//   }

//   return (
//     <div className='flex flex-col'>
//         <div style={{ textAlign: 'center' }}>
//       <p className='font-bold text-[25px]'>{blog.title}</p>
//       <div className='flex justify-center'>
//       <img src={blog.image} alt={blog.title} style={{ width: '50%', height: 'auto' }} />
//       </div>
//       <p>{blog.date}</p>
//       <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
//         <p>{blog.content}</p>
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   );
// }

// export default BlogDetail;
