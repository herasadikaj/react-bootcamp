
import React, { useState } from 'react';
import { MdEdit, MdDeleteForever } from "react-icons/md";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function EventList({ events, deleteEvent, editEvent }) {
  const [currentEventIndex, setCurrentEventIndex] = useState(null);
  const [updatedEvent, setUpdatedEvent] = useState({ name: '', description: '', date: '' });

  const handleEditEvent = (index) => {
    setCurrentEventIndex(index);
    setUpdatedEvent(events[index]);
  };

  const handleSaveEdit = () => {
    editEvent(currentEventIndex, updatedEvent);
    setCurrentEventIndex(null);
  };

  return (
    <div className="event-list">
      <h2>Events List</h2>
      <ul>
        {events.length > 0 ? (
          events.map((event, index) => (
            <li key={index} className="event-item">
              <div className="event-details">
                <strong>{event.name}</strong><br />
                {event.description}<br />
                <em>{event.date}</em>
              </div>
              <MdEdit
                className='edit-btn'
                onClick={() => handleEditEvent(index)}
                size="1.3em"
              />
              <MdDeleteForever
                className="delete-btn"
                onClick={() => deleteEvent(index)}
                size="1.3em"
              />
            </li>
          ))
        ) : (
          <p>No events created yet.</p>
        )}
      </ul>

      <Popup open={currentEventIndex !== null} onClose={() => setCurrentEventIndex(null)}>
        <div className="edit-form">
          <h3 className='h3-edit'>Edit Event</h3>
          <div className='edit-input'>
            <input
              type="text"
              value={updatedEvent.name}
              onChange={(e) => setUpdatedEvent({ ...updatedEvent, name: e.target.value })}
              placeholder="Event Name"
            />
            <input
              type="text"
              value={updatedEvent.description}
              onChange={(e) => setUpdatedEvent({ ...updatedEvent, description: e.target.value })}
              placeholder="Event Description"
            />
            <input
              type="text"
              value={updatedEvent.date}
              onChange={(e) => setUpdatedEvent({ ...updatedEvent, date: e.target.value })}
              placeholder="Event Date"
            />
          </div>
          <div className="modal-buttons">
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={() => setCurrentEventIndex(null)}>Cancel</button>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default EventList;
