import React, { useState } from 'react';

const ContactCard = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Interested in becoming a seller?</h5>
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
