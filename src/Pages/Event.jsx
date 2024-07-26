// src/Pages/Event.js
import React from 'react';
import Navbar from '../Components/HomePage/Navbar';
import EventCard from '../Components/HomePage/EventCard';
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';
import event4 from '../assets/event4.jpg';
import event5 from '../assets/event5.jpg';
import event6 from '../assets/event6.jpg';

const events = [
  {
    image: event1,
    title: 'Event 1',
    description: 'Description for Event 1',
  },
  {
    image: event2,
    title: 'Event 2',
    description: 'Description for Event 2',
  },
  {
    image: event3,
    title: 'Event 3',
    description: 'Description for Event 3',
  },
  {
    image: event4,
    title: 'Event 4',
    description: 'Description for Event 4',
  },
  {
    image: event5,
    title: 'Event 5',
    description: 'Description for Event 5',
  },
  {
    image: event6,
    title: 'Event 6',
    description: 'Description for Event 6',
  },
];

function Event() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Events Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              image={event.image}
              title={event.title}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;
