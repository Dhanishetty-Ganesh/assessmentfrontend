import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import ContactForm from './components/ContactForm';
import AssessmentForm from './components/AssessmentForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/assessment-tasks" element={<AssessmentForm />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
