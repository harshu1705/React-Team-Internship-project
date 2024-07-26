// src/Pages/EventDetail.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/HomePage/Navbar';

const EventDetail = () => {
  const location = useLocation();
  const { image, title, description } = location.state;

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
