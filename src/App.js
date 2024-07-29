import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/Pages/Home';
import Blog from '../src/Pages/Blog';
import Project from '../src/Pages/Project';
import Event from '../src/Pages/Event';
import EventDetail from './Pages/EventDetail';
import Research from '../src/Pages/Research'; 
import Review from './Pages/Review';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Event" element={<Event/>}/>
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/Research" element={<Research />} />  
        <Route path="/Review" element={<Review />} />  
      </Routes>
    </Router>
  );
}

export default App;