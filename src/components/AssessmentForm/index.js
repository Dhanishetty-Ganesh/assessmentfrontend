import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

class AssessmentForm extends Component {
  state = {
    assessments: [],
    showPopup: false,
    newAssessmentTitle: '',
    newAssessmentDescription: '',
  };

  componentDidMount() {
    this.fetchAssessments();
  }

  fetchAssessments = async () => {
    try {
      const response = await axios.get('http://localhost:3001/assessments');
      this.setState({ assessments: response.data });
    } catch (error) {
      console.error('Error fetching assessments', error);
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAddAssessment = async () => {
    const { newAssessmentTitle, newAssessmentDescription } = this.state;
    if (newAssessmentTitle && newAssessmentDescription) {
      try {
        await axios.post('http://localhost:3001/assessments', {
          title: newAssessmentTitle,
          description: newAssessmentDescription
        });
        this.fetchAssessments();
        this.setState({
          showPopup: false,
          newAssessmentTitle: '',
          newAssessmentDescription: ''
        });
      } catch (error) {
        console.error('Error adding assessment', error);
      }
    }
  };

  handleDeleteAssessment = async (id) => {
    try {
      console.log(`Deleting assessment with ID: ${id}`);
      const response = await axios.delete(`http://localhost:3001/assessments/${id}`);
      console.log('Delete response:', response.data);
      this.fetchAssessments();
    } catch (error) {
      console.error('Error deleting assessment', error);
    }
  };

  togglePopup = () => {
    this.setState((prevState) => ({ showPopup: !prevState.showPopup }));
  };

  render() {
    const { assessments, showPopup, newAssessmentTitle, newAssessmentDescription } = this.state;

    return (
      <div className='assessments-form-container'>
        <div className='assessment-top-content'>
          <h1 className='assessment-main-heading'>Assessment Tasks</h1>
          <button className='add-assessment-button' onClick={this.togglePopup}>Add Assessment</button>
        </div>
        <ul className='assessment-tasks-list'>
          {assessments.map((assessment) => (
            <li key={assessment._id} className='assessment-list-card'>
              <h1 className='assessment-heading'>{assessment.title}</h1>
              <p className='assessment-para'>{assessment.description}</p>
              <button className='assessment-button'>Get Started</button>
              <button className='delete-button' onClick={() => this.handleDeleteAssessment(assessment._id)}>Delete</button>
            </li>
          ))}
        </ul>
        {showPopup && (
          <div className='popup-overlay'>
            <div className='popup-form'>
              <h2>Add New Assessment</h2>
              <label>
                Assessment Task:
                <input
                  type='text'
                  name='newAssessmentTitle'
                  value={newAssessmentTitle}
                  onChange={this.handleInputChange}
                  placeholder='Enter Assessment Task'
                />
              </label>
              <label>
                Assessment Task Details:
                <textarea
                  name='newAssessmentDescription'
                  value={newAssessmentDescription}
                  onChange={this.handleInputChange}
                  placeholder='Enter Assessment Task Details'
                />
              </label>
              <button onClick={this.handleAddAssessment}>Submit</button>
              <button onClick={this.togglePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AssessmentForm;
