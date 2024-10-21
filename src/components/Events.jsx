// Event.jsx
import React, { useState } from 'react';
import BasicDateCalendar from './Calendar';

function Event({ addEvent }) {
  const [enteredValues, setEnteredValues] = useState({
    name: '',
    description: '',
    date: '',
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Use the addEvent prop to add a new event
      addEvent(enteredValues.name, enteredValues.description, enteredValues.date);
      setEnteredValues({ name: '', description: '', date: '' }); // Reset the form
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!enteredValues.name) errors.name = "Name is required";
    if (!enteredValues.description) errors.description = "Description is required";
    if (!enteredValues.date) errors.date = "Date is required";
    return errors;
  };

  const handleInputChange = (identifier, value) => {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value,
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [identifier]: '',
    }));
  };

  const handleDateChange = (date) => {
    setEnteredValues(prevValues => ({
      ...prevValues,
      date: date ? date.format('YYYY-MM-DD') : '',
    }));
  };

  return (
    <div className="event-form">
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event's name"
          value={enteredValues.name}
          onChange={(event) => handleInputChange('name', event.target.value)}
        />
        {errors.name && <div className="error">{errors.name}</div>}

        <input
          type="text"
          placeholder="Event's description"
          value={enteredValues.description}
          onChange={(event) => handleInputChange('description', event.target.value)}
        />
        {errors.description && <div className="error">{errors.description}</div>}

        <input
          type="text"
          placeholder="Event's date"
          value={enteredValues.date}
          readOnly
        />
        {errors.date && <div className="error">{errors.date}</div>}

        <BasicDateCalendar onDateChange={handleDateChange} />

        <button className="cbuton" type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default Event;
