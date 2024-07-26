import React from 'react'
import Body from '../Components/HomePage/Body'
import Navbar from '../Components/HomePage/Navbar'
function Home() {
  return (
    <div className='flex flex-col gap-2'>
        <Navbar/>
        <Body/>
    </div>
  )
}

export default Home