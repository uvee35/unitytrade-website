import React from 'react'
import React, { useState } from 'react';

function Contact() {
const [formData, setFormData] = useState({
  name: '',
  email: ''
})
 const toggleForm = () => {
   setFormData(!formData)
 }
 
return (
    <div className="container mt-5">
      <button onClick={toggleForm} className="btn btn-primary">
        {showForm ? 'Hide Contact Form' : 'Show Contact Form'}
      </button>
      {showForm && (
        <form className="mt-3">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      )}
    </div>
  )
}

export default Contact