import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Confetti from 'react-confetti';
import "./contactForm.css";

const contactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "UnityTradeCS";
    const templateID = "template_j2k96md";
    const publicKey = "_J8Tv9MOBMs35s1Tu";

    const templateParams = {
      name: name,
      email: email,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (res) => {
        setShowSuccessMessage(true);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000); // Stop showing confetti after 5 seconds
        setName("");
        setEmail("");
      },
      (err) => {
        console.log("Error sending email", err);
        // Optionally handle error state as well
      }
    );
  };

  return (
    <div className="card">
      <div className="card-body text-center">
        <h1 className='card-title'>New to Unity Trade?</h1>
        <h5 className="card-info">Want to join our community of sellers or just want to ask some questions about the process? Click the button below and one of our team members will get back to you shortly.</h5>
        {showConfetti && <Confetti />}
        <form onSubmit={handleSubmit} className="contact-form">
          {showSuccessMessage && <div className="success-message">Your email has been submitted!</div>}
          <label htmlFor="name" className="label-left">Name:</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email" className="label-left">Email address:</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="contact-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default contactForm;
