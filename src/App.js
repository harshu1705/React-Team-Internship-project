import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Project from './Pages/Project';
import Event from './Pages/Event';
import EventDetail from './Pages/EventDetail';
import CoursesPage from './Components/HomePage/CoursesPage';
import Research from './Pages/Research';
import Review from './Pages/Review'
import BlogDetail from './Pages/BlogDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/project" element={<Project />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/Review" element={<Review />} />
        
         <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
