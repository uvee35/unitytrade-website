import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default contactForm;
