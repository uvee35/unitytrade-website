import React, { useState } from 'react';
import ContactForm from '../ContactForm/index'
import './Index.css'

function Contact() {
 
return (
  <>
  <ContactForm />
    
<br></br>
<br></br>
    <div className='container'>
      <h1 className='contact-title text-start'>Contact Us:</h1>
      <p>Welcome to Unity Trade! Our dedicated customer service team is here to help you with any questions or concerns you may have. Please use the contact information below to get in touch with us.</p>
      <br></br>
      <ul>
      <li>Phone: 123-456-7890</li>
      <li>Email: <a href="mailto:0zP7d@example.com" id='email'>0zP7d@example.com</a></li>
      </ul>
      
    </div>
  </>
  )
}

export default Contact