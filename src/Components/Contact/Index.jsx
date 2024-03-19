import React, { useState } from 'react';
import ContactForm from '../ContactForm/contactForm'
import './Index.css'

function Contact() {
 
return (
  <div className='contact-body'>
    <br></br>
  <ContactForm />
    
<br></br>
<br></br>
    <div className='container'>
      <h1 className='contact-title text-start'>Contact Us:</h1>
      <p className='contact-info'>Welcome to Unity Trade! Our dedicated customer service team is here to help you with any questions or concerns you may have.</p>
      <p className='contact-info'>Please use the contact information below to get in touch with us.</p>
      <br></br>
      <ul>
      <li>Phone: 123-456-7890</li>
      <li>Email: <a href="mailto:0zP7d@example.com" id='email'>unitytradecs@gmail.com</a></li>
      </ul>
      <br></br>
      <br></br>
    </div>
  </div>
  )
}

export default Contact