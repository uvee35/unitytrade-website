import React, { useState } from 'react';
import './index.css';

const ContactCard = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="card">
      <div className="card-body text-center">
        <h1 className='card-title'>New to Unity Trade?</h1>
        <h5 className="card-info">Want to join our community of sellers or just want to ask some questions about the process? Click the button below and one of our team members will get back to you shortly.</h5>
        <button className="btn btn-primary" onClick={toggleForm}>Click Here!</button>
        {showForm && (
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
