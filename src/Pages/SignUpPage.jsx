import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import SignUp from '../assets/SignUp.png'

function SignUpPage() {
  const[visible,setVisible]=useState(false)

  function visibility(){
    setVisible(!visible);
  }
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/v1/users/register', formData);
      console.log('User registered:', response.data);
      alert("Sign Up successfully")
      navigate('/Login')

    } catch (error) {
      console.error('Error registering user:', error);
      visibility();

    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      
     <div className='flex bg-slate-200 rounded-lg'>
     <div className="p-7 bg-slate-200 items-center rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-2">
            <p className='text-[25px]'>Sign Up into new account</p>

            <div className='flex justify-center gap-2 border border-blue-700 px-10 py-2 bg-white '>
                <i className="fa-brands fa-google mt-2"></i>
                <p className='text-[20px] text-blue-600 font-bold'>Login with Google</p>
            </div>
            <p className='flex justify-center'>OR</p>
            <label htmlFor="username" className="mb-2">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="border border-black p-2 rounded"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="border border-black p-2 rounded"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="border border-black p-2 rounded"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {visible && <p className='font-bold text-red-600'>Plz try again</p>}
          <div className="flex ">
            <button type="submit" className="flex bg-blue-700 text-white w-full p-3 rounded justify-center">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <div className='flex '>
        <img src={SignUp} width={500} height={500} />
      </div>
     </div>
    </div>
  );
}

export default SignUpPage;
