import React from 'react';
import './Events.css';

function Events() {
  const events = [
    {
      id: 1,
      name: 'Annual Sports Day',
      description: 'A fun-filled day of athletic events where students showcase their sportsmanship and skills.',
      date: '2024-12-30',
      location: 'School Playground',
    },
    {
      id: 2,
      name: 'Parent-Teacher Meeting',
      description: 'A meeting where parents and teachers discuss the progress and development of students.',
      date: '2024-12-15',
      location: 'Classrooms',
    },
    {
      id: 3,
      name: 'Art & Craft Exhibition',
      description: 'An exhibition where students display their creativity through art and craft projects.',
      date: '2025-01-10',
      location: 'School Hall',
    },
    {
      id: 4,
      name: 'Annual Day Celebration',
      description: 'A grand celebration showcasing the talents of our students in dance, drama, and music.',
      date: '2025-01-25',
      location: 'Auditorium',
    },
  ];

  return (
    <div className="events-container">
      <h1>Upcoming Events</h1>
      <div className="events-list">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <h2>{event.name}</h2>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
