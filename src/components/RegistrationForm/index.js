import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import './index.css';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
    if (name === 'email') setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await axios.post('http://localhost:3001/register', {
        username,
        password: hashedPassword,
        email,
      });
      setMessage('Thank you for registering! You have been successfully registered. Please login now.');
      setUsername('');
      setPassword('');
      setEmail('');
    } catch (error) {
      setMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="registrationform-container">
      <form className="registrationform-form" onSubmit={handleSubmit}>
        <label className="registrationform-label">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            className="registrationform-input"
          />
        </label>
        <label className="registrationform-label">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="registrationform-input"
          />
        </label>
        <label className="registrationform-label">
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="registrationform-input"
          />
        </label>
        <button type="submit" className="registrationform-button">Register</button>
      </form>
      {message && <p className="registrationform-message">{message}</p>}
    </div>
  );
};

export default RegistrationForm;
