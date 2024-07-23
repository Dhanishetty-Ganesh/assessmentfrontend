import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './index.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      Cookies.set('token', response.data.token);
      setMessage('Login successful');
      navigate('/assessments-tasks');
    } catch (error) {
      const errorMessage = error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : 'Login failed. Please try again.';
      setMessage(errorMessage);
    }
  };

  return (
    <div className="loginform-container">
      <form className="loginform-form" onSubmit={handleSubmit}>
        <label className="loginform-label">
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="loginform-input"
            required
          />
        </label>
        <label className="loginform-label">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="loginform-input"
            required
          />
        </label>
        <button type="submit" className="loginform-button">Login</button>
      </form>
      {message && <p className="loginform-message">{message}</p>}
    </div>
  );
};

export default LoginForm;
