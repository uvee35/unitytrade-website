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
  <>
  <p>Welcome to Unity Trade! Our dedicated customer service team is here to help you with any questions or concerns you may have. Please use the form below to get in touch with us or find our contact information below.</p>
  <br></br>
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
<br></br>
<br></br>
    <div>
      <h1>Contact Us Here:</h1>
      <h3>Phone: 123-456-7890</h3>
      <h3>Email: 0zP7d@example.com</h3>
    </div>
  </>
  )
}

export default Contact