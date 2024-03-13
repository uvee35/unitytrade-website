import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css";

export default function Navbar() {
  useEffect(() => {
    console.log('Navbar component mounted');
    return () => {
      console.log('Navbar component will unmount');
    };
  }, []);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavbarBootstrap.Brand href="#home">Corporate</NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#categories">Categories</Nav.Link>
            <Nav.Link href="#sign-in">Sign in</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </Navbar>
  );
}
