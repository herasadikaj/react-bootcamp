
import React, { useEffect, useState } from 'react';
import Event from './Events'; 
import EventList from './EventList';

function EventManager() {
  const [events, setEvents] = useState([]);


  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  
  const addEvent = (name, description, date) => {
    const newEvent = { name, description, date };
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents); 
    localStorage.setItem('events', JSON.stringify(updatedEvents)); 
  };


  const deleteEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents); 
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  
  const editEvent = (index, updatedEvent) => {
    const updatedEvents = [...events];
    updatedEvents[index] = updatedEvent;
    setEvents(updatedEvents); 
    localStorage.setItem('events', JSON.stringify(updatedEvents)); 
  };

  return (
    <div className="event-manager">
      <h2>Events</h2>
      <div className="event-container">
       
        <Event addEvent={addEvent} />

        <EventList events={events} deleteEvent={deleteEvent} editEvent={editEvent} />
      </div>
    </div>
  );
}

export default EventManager;
