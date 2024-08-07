import {React,useState} from 'react';
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

import SignUpPage from './Pages/SignUpPage';
import Login from './Pages/Login'
import Redirect from './Pages/Redirest'
import EnterBlog from './Pages/EnterBlog';
import UpdateBlog from './Pages/UpdateBlog';

import Count from './Pages/Count';

function App() {
  
  return (
    <Router>
      <Routes>
      <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/project" element={<Project />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/Review/:id" element={<Review />} />
        <Route path="/" element={<Login />} />
        
         <Route path="/Redirect" element={<Redirect/>}/>
         <Route path="/EnterBlog/:id" element={<EnterBlog/>}/>
         <Route path="/UpdateBlog" element={<UpdateBlog/>}/>

         {/* <Route path="/temp" element={<Count />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
