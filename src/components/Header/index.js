import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar-container">
        <h1 className="navbar-heading">Assessments</h1>
        <ul className="navbar-list-container">
          <li><Link to="/" className="navbar-list">Home</Link></li>
          <li><Link to="/about" className="navbar-list">About</Link></li>
          <li><Link to="/assessment-tasks" className="navbar-list">Assessment Tasks</Link></li>
          <li><Link to="/contact" className="navbar-list">Contact</Link></li>
          <li><Link to="/register" className="navbar-list register-navbar">Register</Link></li>
          <li><Link to="/login" className="navbar-list register-navbar">Login</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
