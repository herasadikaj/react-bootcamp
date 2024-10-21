
import "./website.css";
import { useState } from "react";

function Contact() {
  const [entredValues, setEnteredValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setContact(
        entredValues.name,
        entredValues.email,
        entredValues.subject,
        entredValues.message
      );
      console.log(entredValues);

     
      setEnteredValues({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  }

  function setContact(name, email, subject, message) {
    localStorage.setItem('contact', JSON.stringify({ name, email, subject, message }));
  }

  function validateForm() {
    const errors = {};

    if (!entredValues.name) {
      errors.name = "Name is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!entredValues.email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(entredValues.email)) {
      errors.email = 'Invalid email format';
    }

    if (!entredValues.subject) {
      errors.subject = 'Subject is required';
    }

    if (!entredValues.message) {
      errors.message = 'Message is required';
    }

    return errors;
  }

  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [identifier]: ''
    }));
  }

  return (
    <div>
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={entredValues.name}
          onChange={(event) => handleInputChange('name', event.target.value)}
        />
        {errors.name && <div className="error">{errors.name}</div>}

        <input
          type="email"
          placeholder="Email"
          value={entredValues.email}
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <input
          type="text"
          placeholder="Subject"
          value={entredValues.subject}
          onChange={(event) => handleInputChange('subject', event.target.value)}
        />
        {errors.subject && <div className="error">{errors.subject}</div>}

        <textarea
          placeholder="Message"
          value={entredValues.message}
          onChange={(event) => handleInputChange('message', event.target.value)}
        />
        {errors.message && <div className="error">{errors.message}</div>}

        <button className="cbuton" type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
