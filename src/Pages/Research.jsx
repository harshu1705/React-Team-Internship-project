import React from 'react'
import Navbar from '../Components/HomePage/Navbar'
import Fro_Project from '../Components/HomePage/Fro_Project.png'
import Footer from '../Components/HomePage/Footer'
function Research() {
  return (
    <div className='flex flex-col gap-5'>
      <div>
        <Navbar/>
      </div>
      <p className='flex justify-center font-bold text-dark-blue text-[25px]'>RESEARCH WORK</p>
      <div className='flex justify-evenly mx-10'>
        <div className='flex flex-col w-[250px] p-5 bg-dark-blue '>
            <p className='flex font-bold justify-center text-white'>Research Title</p>
            <img src={Fro_Project} width={250} height={250}/>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque, voluptate officiis perferendis fugiat incidunt, est alias et esse unde fugit cum qui corrupti dolores illum quibusdam quas nihil. Dolor quo ab quis harum eum.</p>
        </div>

        <div className='flex flex-col w-[250px] p-5 bg-blue-400 '>
            <p className='flex font-bold justify-center '>Research Title</p>
            <img src={Fro_Project} width={250} height={250}/>
            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente laboriosam eveniet fugiat! Consequatur, voluptatem saepe similique vel et earum ut tenetur hic blanditiis cupiditate deleniti dolorem ratione laborum autem modi impedit ipsum reiciendis enim!.</p>
        </div>
        <div className='flex flex-col w-[250px] p-5 bg-dark-blue '>
            <p className='flex font-bold justify-center text-white'>Research Title</p>
            <img src={Fro_Project} width={250} height={250}/>
            <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae esse non nulla, obcaecati veritatis laboriosam sed, aspernatur ratione beatae, ipsam illum mollitia reiciendis similique quia? In vel eligendi non quaerat repudiandae fuga eius, incidunt et.</p>
        </div>
        <div className='flex flex-col w-[250px] p-5  bg-blue-400 '>
            <p className='flex font-bold justify-center'>Research Title</p>
            <img src={Fro_Project} width={250} height={250}/>
            <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eius dolor pariatur quae dignissimos quod exercitationem. Fugiat corrupti molestiae minima adipisci dignissimos saepe et expedita nemo aliquid aspernatur neque recusandae, itaque explicabo sint ea vel.</p>
        </div>
        
      </div>
      <div>
        <Footer/>
      </div>

      
    </div>
  )
}

export default Research