import React, { Component } from 'react';
import './index.css';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    mobile: '',
    location: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted', this.state);
    // Clear the form
    this.setState({ name: '', email: '', mobile: '', location: '' });
  };

  render() {
    const { name, email, mobile, location } = this.state;
    return (
      <div className="contact-form-container">
        <h1 className="contact-form-heading">Contact Us</h1>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <label className="contact-form-label">
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Your Name"
              required
            />
          </label>
          <label className="contact-form-label">
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Your Email"
              required
            />
          </label>
          <label className="contact-form-label">
            Mobile Number:
            <input
              type="tel"
              name="mobile"
              value={mobile}
              onChange={this.handleChange}
              placeholder="Your Mobile Number"
              required
            />
          </label>
          <label className="contact-form-label">
            Location:
            <input
              type="text"
              name="location"
              value={location}
              onChange={this.handleChange}
              placeholder="Your Location"
              required
            />
          </label>
          <button type="submit" className="contact-form-submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
