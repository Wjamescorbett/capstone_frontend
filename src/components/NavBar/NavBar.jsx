import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button"

const NavBar = (props) => {

  const handleOnClick= () => {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Button onClick={()=>handleOnClick()}>Logout</Button>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"/>
          </Navbar.Collapse>
        </Container>
        <Button variant="primary">My Favorite Quotes</Button>
      </Navbar>
    </div>
  );
};

export default NavBar;