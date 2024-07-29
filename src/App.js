import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/Pages/Home'
import Blog from '../src/Pages/Blog'
import Project from '../src/Pages/Project'
import Event from '../src/Pages/Event'
<<<<<<< HEAD
import EventDetail from './Pages/EventDetail'
import Review from './Pages/Review';
=======
import Research from '../src/Pages/Research'
import EventDetail from './Pages/EventDetail';
>>>>>>> 2db0a788f64e9456ece780d2c505175205a06bc6
function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Event" element={<Event/>}/>
        <Route path="/event/:id" element={<EventDetail />} />
<<<<<<< HEAD
        <Route path="/Review" element={<Review />} />


=======
        <Route path="/Research" element={<Research />} />
>>>>>>> 2db0a788f64e9456ece780d2c505175205a06bc6
      </Routes>
   </Router>
  );
}

export default App;