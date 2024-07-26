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
        <AboutUs/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Home