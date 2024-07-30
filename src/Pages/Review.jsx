import React from 'react'
import Navbar from '../Components/HomePage/Navbar'
import Footer from '../Components/HomePage/Footer'
import ReviewEntry from './ReviewBox'
import './reviewbox.css'; 



function Review() {
  return (
    <div>
      <div><Navbar/></div>
      <div className="flex-review-container">
        
        <div className="our-review">Reviews</div>
        <div>
        <ReviewEntry title="A wonderful experience"/>
        <ReviewEntry title="A wonderful experience"/>
        <ReviewEntry title="A wonderful experience"/>
        <ReviewEntry title="A wonderful experience"/>
        </div>

      </div> 
      <div><Footer/></div>
    </div>
  )
}

export default Review