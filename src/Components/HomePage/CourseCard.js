// src/components/CourseCard.js

import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CourseTitle = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`;

const CourseDescription = styled.p`
  font-size: 1em;
  color: #666;
  line-height: 1.5;
`;

const CourseCard = ({ title, description }) => {
  return (
    <Card>
      <CardContent>
        <CourseTitle>{title}</CourseTitle>
        <CourseDescription>{description}</CourseDescription>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
