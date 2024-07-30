

import React from 'react';
import styled from 'styled-components';
import CourseCard from '../HomePage/CourseCard';
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'

const CoursesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f9;
`;

const CoursesHeading = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const courses = [
  { id: 1, title: 'React for Beginners', description: 'Learn the basics of React.' },
  { id: 2, title: 'Advanced JavaScript', description: 'Dive deeper into JavaScript.' },
  { id: 3, title: 'UI/UX Design Principles', description: 'Understand modern design practices.' },
  { id: 4, title: 'React + SpringBoot ', description: 'Understand modern design practices.' },
  { id: 5, title: 'Bootstrap CSS', description: 'Understand modern design practices.' },
  // { id: 6, title: 'Node.js Express MongoDb', description: 'Understand modern design practices.' },
  { id: 7, title: 'Blockchain + React', description: 'Understand modern design practices.' },
  { id: 6, title: 'Node.js ', description: 'Understand modern design practices.' },
  
];

const CoursesPage = () => {
  return (
   <div className='flex flex-col gap-5'>
     <div>
        <Navbar/>
     </div>
     <div>
     <CoursesPageContainer>
    
    <CoursesHeading>Our Courses</CoursesHeading>
    <CoursesGrid>
      {courses.map(course => (
        <CourseCard key={course.id} title={course.title} description={course.description} />
      ))}
    </CoursesGrid>
  </CoursesPageContainer>
     </div>
     <div>
      <Footer/>
     </div>
   </div>
  );
};

export default CoursesPage;
