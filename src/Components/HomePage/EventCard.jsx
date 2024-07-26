// src/Components/EventCard.js
import React from 'react';

const EventCard = ({ image, title, description }) => {
  return (
    <div className="relative group">
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <div className="text-white p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
