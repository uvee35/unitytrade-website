import React, { useState } from 'react';
import './index.css';



const ContactCard = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const toggleForm = () => {
    setShowForm(!showForm);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || email.trim() === '') {
      alert('Please enter both your name and email.');
      return;
    }
    setSubmitMessage('Your email has been submitted! You will receive a response shortly.');
   
    setShowForm(false);
    setName('');
    setEmail('');   
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="card">
      <div className="card-body text-center">
        <h1 className='card-title'>New to Unity Trade?</h1>
        <h5 className="card-info">Want to join our community of sellers or just want to ask some questions about the process? Click the button below and one of our team members will get back to you shortly.</h5>
        {!showForm && !submitMessage && <button className="btn btn-primary" onClick={toggleForm}>Click Here!</button>}
        {showForm && !submitMessage && (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" value={name} onChange={handleNameChange} placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        )}
        {submitMessage && <p>{submitMessage}</p>}
      </div>
    </div>
  );
};

export default ContactCard;
