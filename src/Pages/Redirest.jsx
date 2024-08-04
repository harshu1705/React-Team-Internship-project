import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Redirest() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(true);
  const token = localStorage.getItem('accessToken');
  if(token==''){
    setIsAuthenticated(false)
  }
  return (
    <div>
        { 
            !isAuthenticated && (
                navigate('/SignUpPage')
            )
        }
    </div>
  )
}

export default Redirest