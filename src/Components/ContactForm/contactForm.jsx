import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contactForm.css";

const contactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
        alert(
          "Your email has been submitted! You will receive a response shortly.",
          res.status,
          res.text
        );
        setName("");
        setEmail("");
      },
      (err) => {
        console.log("Error sending email", err);
      }
    );
  };

  return (
    <div className="card">
      <div className="card-body text-center">
      <h1 className='card-title'>New to Unity Trade?</h1>
        <h5 className="card-info">Want to join our community of sellers or just want to ask some questions about the process? Click the button below and one of our team members will get back to you shortly.</h5>
    <form onSubmit={handleSubmit} className="contact-form">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Email address:</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
};

export default contactForm;
