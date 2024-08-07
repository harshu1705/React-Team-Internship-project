import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import SignUp from '../assets/SignUp.png'

function Login() {
  const [visible,setVisible]=useState(false);
  function Visibility(){
    setVisible(!visible)
  }

  function Submit(){
    navigate('/SignUpPage')
  }
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
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
      const response = await axios.post('http://localhost:3000/api/v1/users/login', formData);
      console.log('User login:', response.data);
      alert("Login successfull")
      navigate('/Home')
      

    } catch (error) {
      console.error('Error logging user:', error);
      Visibility();

    }
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      
     <div className='flex bg-slate-200 rounded-lg border-[5px] border-dark-blue'>
     <div className="p-7 bg-slate-200 items-center rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-2">
            <p className='text-[25px] font-bold text-blue-700'>Login into account </p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-bold">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="border border-black p-2 rounded "
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 font-bold">Password:</label>
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
          <p>Don't have an account?<span className='text-blue-700 font-bold cursor-pointer' onClick={Submit} >Register here</span></p>
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
  )
}

export default Login