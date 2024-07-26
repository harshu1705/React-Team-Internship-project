import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/Pages/Home'
import Blog from '../src/Pages/Blog'
import Project from '../src/Pages/Project'
function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Project" element={<Project/>}/>
      
      </Routes>
   </Router>
  );
}

export default App;

