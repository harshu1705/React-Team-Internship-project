import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Components/HomePage/Navbar';
import Footer from '../Components/HomePage/Footer'
function EnterBlog() {
    const params = useParams();
    const [blog, setBlog] = useState({});
    const id = params.id;
    const navigate=useNavigate()
    
    useEffect(() => {
        const fetchBlogs=async()=>{
            try{
                const response=await axios.get(`http://localhost:3000/api/v1/users/blog/${id}`)
                setBlog(response.data.data)

                
            }
            catch(error){
                console.error('Error:',error)
            }
        }
        fetchBlogs();
    }, [id]);
    const handleSubmit=async(id)=>{
        try{
            const response=await axios.put(`http://localhost:3000/api/v1/users/blog/${id}`,blog)
            console.log(response.data.data)
            alert('Changed successfully')
            navigate('/Blog')
        }
        catch(error){
            console.log('Error',error)
        }
    }

    return (
       <div className='flex flex-col gap-5'>
            <Navbar/>
            <div className='flex flex-col w-full gap-5 mt-5'>
            <p className='flex justify-center font-bold text-[25px] text-dark-blue'>UPDATE BLOGS</p>
            <div className='flex flex-col justify-center'>
                <p className='flex mx-16 font-bold'>Title</p>
                <input
                    className='border-black border-2 p-5 mx-16 bg-slate-200 rounded-lg'
                    placeholder='TITLE'
                    name='title' 
                    value={blog.title}
                    onChange={(e) =>setBlog(blog =>{
                        return {
                            ...blog,
                            title: e.target.value,
                           
                        }
                    })}
                />
            </div>
            <div className='flex flex-col justify-center'>
                
                <p className='flex mx-16 font-bold'>Description</p>
                <textarea
                    className='border-black border-2 p-8 mx-16 bg-slate-200 rounded-lg'
                    placeholder='DESCRIPTION'
                    name='description'
                    value={blog.description}
                    onChange={(e) =>setBlog(blog =>{
                        return {
                            ...blog,
                            description: e.target.value,
                            
                        }
                    })}
                />
            </div>
            <div className='flex justify-center'>
                <button
                    className='bg-dark-blue px-16 py-4 text-white rounded-lg'
                    onClick={()=>handleSubmit(id)}
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
