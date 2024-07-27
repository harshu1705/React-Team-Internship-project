// src/Pages/EventDetail.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Components/HomePage/Navbar';
import { motion } from 'framer-motion'; // Ensure framer-motion is installed

const EventDetail = () => {
  const location = useLocation();
  const { image, title, description } = location.state || {};

  const navigate = useNavigate();

  // Handle back navigation
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  if (!title) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Event not found</h2>
          <button onClick={handleBackClick} className="text-blue-500 underline">
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <button onClick={handleBackClick} className="text-blue-500 underline mb-4">
          &larr; Back to Events
        </button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg overflow-hidden shadow-lg flex flex-col items-center"
        >
          <img
            src={image}
            alt={title}
            className="w-full max-w-3xl h-auto object-cover mb-4 rounded-lg"
          />
          <div className="p-4 text-center">
            <h3 className="text-3xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700 text-lg">{description}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventDetail;
