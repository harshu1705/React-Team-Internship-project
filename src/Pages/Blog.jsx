import React from 'react'
import Navbar from '../Components/HomePage/Navbar'
import Footer from '../Components/HomePage/Footer'
import BlogEntry from './Entryblog'
import '@fortawesome/fontawesome-free/css/all.min.css';


function Blog() {
  return (
    <div>
      <div><Navbar/></div>
      <div className="flex-container">
        {/* <div><Navbar/></div> */}
        <div className="our-blog"> Our Blog </div>
        <div>
        <BlogEntry title="New Endeavours" />
        <BlogEntry title="New Endeavours" />
        <BlogEntry title="New Endeavours" />
        <BlogEntry title="New Endeavours" /> 
        </div>

      </div> 
      <div><Footer/></div>
    </div>
  
  )
}

export default Blog