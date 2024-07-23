import React, { Component } from 'react';
import { FaRegSmileBeam, FaBook, FaRegThumbsUp } from 'react-icons/fa';
import './index.css';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page-container">
        <div className="landing-page-card">
          <h1 className="landing-page-heading">Welcome to Assessment Tasks Application</h1>
          <p className="landing-page-text">
            <FaRegSmileBeam className="icon" /> Click on the Register button to get started.
          </p>
          <p className="landing-page-text">
            <FaBook className="icon" /> Here you will find different assessment tasks which you can complete to gain knowledge and improve your skills.
          </p>
          <p className="landing-page-text">
            <FaRegThumbsUp className="icon" /> Explore various topics, complete tasks, and track your progress. Happy learning!
          </p>
        </div>
      </div>
    );
  }
}

export default LandingPage;
