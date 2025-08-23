import "./css/Contacts.css"
import React, { useState } from 'react';

function Contacts(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [status, setStatus] = useState('');
    
      // 2. Update state as the user types
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      // 3. Handle the form submission
      const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
    
        setStatus('Sending...');
    
        try {
          // 4. Send a POST request to your Node.js server
          const response = await fetch('http://localhost:5000/send-email', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              message: formData.message,
            }),
          });
    
          const data = await response.json();
    
          // 5. Provide feedback based on the server's response
          if (data.message === 'Email sent successfully!') {
            setStatus(`Message sent successfully! Thank you.`);
            setFormData({ name: '', email: '', message: '' }); // Clear the form
          } else {
            setStatus('Failed to send message. Please try again.');
          }
        } catch (error) {
          console.error('Error:', error);
          setStatus('An error occurred. Please try again.');
        }
      };
    
      return (
        <div class="Grand">
         
         <div className="firstCont">
        <h2 class="contactTitle">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          
          <div class="questions">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autocomplete="off"
            />
          </div>
          <div class="questions">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autocomplete="off"
            />
          </div>
          <div class="questions">
            <label htmlFor="message">Message: </label><br />
            <textarea
              id="message"
              name="message"
              rows="20"
              cols="20"
              value={formData.message}
              onChange={handleChange}
              required
              
            />
          </div>
          <button type="submit" id='SUBMIT'>Send<ion-icon name="send-outline"></ion-icon></button>
          {status && <p class="status">{status} </p>}
        </form>
        </div>
        </div>
      );
}

export default Contacts