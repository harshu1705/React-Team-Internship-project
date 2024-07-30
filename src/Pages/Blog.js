import React from 'react';
import BlogEntry from './Blogentry';
import event4 from '../assets/event4.jpg';
import event3 from '../assets/event3.jpg';

const blogEntries = [
  {
    id: 1,
    title: 'New Endeavours',
    image: event4,
    date: '20th July 2024',
    content: 'Detailed content of New Endeavours...',
  },
  {
    id: 2,
    title: 'Another Adventure',
    image: event3,
    date: '25th July 2024',
    content: 'Detailed content of Another Adventure...',
  },
  // Add more blog entries as needed
];

function Blog() {
  return (
    <div>
      <div className="our-blog"> Our Blog </div>
      <div className="flex-container">
        {blogEntries.map((entry) => (
          <BlogEntry
            key={entry.id}
            id={entry.id}
            title={entry.title}
            image={entry.image}
            date={entry.date}
            content={entry.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
