

import React from 'react';
import styled from 'styled-components';
import CourseCard from '../HomePage/CourseCard';

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
  // Add more courses as needed
];

const CoursesPage = () => {
  return (
    <CoursesPageContainer>
      <CoursesHeading>Our Courses</CoursesHeading>
      <CoursesGrid>
        {courses.map(course => (
          <CourseCard key={course.id} title={course.title} description={course.description} />
        ))}
      </CoursesGrid>
    </CoursesPageContainer>
  );
};

export default CoursesPage;
