import React from 'react'
import Body from '../Components/HomePage/Body'
import Navbar from '../Components/HomePage/Navbar'
import AboutUs from '../Components/HomePage/AboutUs'
import ContactUs from '../Components/HomePage/ContactUs'
import Footer from '../Components/HomePage/Footer'
function Home() {
  return (
    <div className='flex flex-col gap-2'>
        <Navbar/>
        <Body/>
        <div id="about-us-section">
             <AboutUs/>
        </div>
       <div id="contact-us-section">
            <ContactUs/>
       </div>
        <Footer/>
    </div>
  )
}

export default Home