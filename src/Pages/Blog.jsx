import React from 'react'
import Navbar from '../Components/HomePage/Navbar'
import Footer from '../Components/HomePage/Footer'
import BlogEntry from './Entryblog'
import '@fortawesome/fontawesome-free/css/all.min.css';
import blog1 from '../assets/event3.jpg'
import blog2 from '../assets/event5.jpg'
import blog3 from '../assets/celeb.jpeg'
import blog4 from '../assets/event6.jpg'

function Blog() {
  return (
    <div>
      <div><Navbar/></div>
        <div className="our-blog"> Our Blog </div>
        <div className="flex-container">
          <BlogEntry
            title="New Endeavours"
            image={blog1}
            date="20th July 2024"
            link="/new-endeavours"
          />
          <BlogEntry
            title="Another Adventure"
            image={blog2}
            date="25th July 2024"
            link="/another-adventure"
          />
          <BlogEntry
            title="So much to learn"
            image={blog3}
            date="20th July 2024"
            link="/new-endeavours"
          />
          <BlogEntry
            title="Precious moments"
            image={blog4}
            date="25th July 2024"
            link="/another-adventure"
          />
        </div> 
      <div><Footer/></div>
    </div>
  );
}
export default Blog
