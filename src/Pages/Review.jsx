import React, { useState, useEffect } from 'react';
import Navbar from '../Components/HomePage/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Components/HomePage/Footer';

function Review() {
  const params = useParams();
  const [review, setReview] = useState([]);
  const id = params.id;
  const navigate=useNavigate()
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/users/review/${id}`);
        setReview(response.data.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchReviews();
  }, [id]);

  const[formData,setFormData]=useState({
    blogId:params.id,
    description:'',
    username:'',
  })

  const handleChange=(event)=>{
    const{name,value}=event.target;
    setFormData({
      ...formData,
      [name]:value,
     
    })
  }
  const handleSubmit=async(event)=>{
    event.preventDefault();
    try{
      const response=await axios.post("http://localhost:3000/api/v1/users/review",formData)
      alert('Review added')
      navigate('/Blog')
      setFormData({
        ...formData,
        username: response.data.data[0].username,
        
       
       
      })
    }
    catch(error){
      console.log("Error",error)
    }
    
  }

  const handleDelete=async(id)=>{
    try{
      await axios.delete(`http://localhost:3000/api/v1/users/review/${id}`)
      setReview(review.filter(review=>review._id!=id))
    }
    catch(error){
      console.error("Error:",error)
    }
  }

  return (
    <div className='flex flex-col gap-10 '>
      <Navbar />
      <p className='text-dark-blue font-bold flex justify-center text-[30px]'>
        REVIEWS
      </p>
      <div className='grid grid-cols-4 mx-8 gap-6'>
        {review.map((review) => (
          <div key={review._id} className="flex flex-col gap-3 p-5 border-[5px] border-dark-blue rounded-lg bg-slate-100">
            <div className="border-b-2 pb-2">
              <div className='flex justify-between'>
                <p className="text-[20px] font-bold text-dark-blue">{review.username}</p>
                <i class="fa-solid fa-trash cursor-pointer text-red-600" onClick={()=>handleDelete(review._id)} ></i>
                {/* review._id ->review is coming from .map(review) and _id from mongoDB */}
              </div>
            </div>
            <p className="font-bold text-slate-500">
              {review.description}
            </p>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center w-full gap-5'> 
      <p className='font-bold text-dark-blue text-[30px]'>RATE US....</p>
      <div className='flex text-[40px] gap-5'>
      <i class="fa-regular fa-star cursor-pointer"></i>
      <i class="fa-regular fa-star cursor-pointer"></i>
      <i class="fa-regular fa-star cursor-pointer"></i>
      <i class="fa-regular fa-star cursor-pointer"></i>
      <i class="fa-regular fa-star cursor-pointer"></i>
      </div>
        <p className='mb-2 font-bold text-dark-blue text-[30px]'>ADD YOUR REVIEW....</p>
        <input type='text' 
        placeholder='Your username....' 
        name='username'
        value={formData.username}
        onChange={handleChange}
        className='w-1/2 rounded-lg p-2 border-dark-blue border-[5px] placeholder:bg-slate-100 bg-slate-100 placeholder:text-slate-500'/>
        <textarea
          type='text'
          name='description'
          value={formData.description}
          onChange={handleChange}
          placeholder='Write your reviews....'
          className='p-2  rounded-lg w-1/2 border-dark-blue border-[5px] pb-36 placeholder:bg-slate-100 bg-slate-100 placeholder:text-slate-500' 
        />
        <button className='bg-dark-blue p-2 px-4 rounded-lg text-[20px] text-white' onClick={handleSubmit}>Post</button>
      </div>
     <Footer/>
    </div>
  );
}

export default Review;
