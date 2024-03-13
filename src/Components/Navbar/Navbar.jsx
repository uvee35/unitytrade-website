// src/Navbar.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar'; // Changed the name here
import './Navbar.css';

export default function CustomNavbar() { // Changed the name here
  return (
    <NavbarBootstrap expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarBootstrap.Brand href="#home">Corporate</NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#categories">Categories</Nav.Link> {/* Corrected the spelling of "Categories" */}
            <Nav.Link href="#sign-in">Sign in</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link> {/* Corrected the spelling of "Contact" */}
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}
