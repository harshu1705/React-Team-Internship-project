// src/Components/HomePage/EventCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ image, title, description, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${id}`, { state: { image, title, description } });
  };

  return (
    <div
      className="relative group cursor-pointer transform transition duration-500 hover:scale-105"
      onClick={handleClick}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <div className="text-white p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
