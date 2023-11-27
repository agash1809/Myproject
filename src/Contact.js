
import React, { useState } from 'react';
import './Contact.css';

const ContactPage = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    console.log('Form submitted:', contactInfo);
  };

  return (
    <div>
      <h2>Contact Us</h2>
    <div className="contact-container">

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={contactInfo.name}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={contactInfo.email}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={contactInfo.subject}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={contactInfo.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ContactPage;
