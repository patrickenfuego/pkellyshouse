import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar
      className="navbar navbar-expand-sm justify-content-end"
      variant="light"
      expand="md"
      sticky="top"
    >
      <Navbar.Brand href="/" className="navbar-brand">
        <img
          src="/assets/images/pkhouse.png"
          width="80"
          height="50"
          className="d-inline-block align-top"
          alt="logo"
        />
      </Navbar.Brand>
      <Button className="btn ml-auto mr-1 btn-login" variant="dark">
        Login
      </Button>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="#link1">Projects</Nav.Link>
          <Nav.Link href="#link2">Blog</Nav.Link>
          <NavDropdown title="Media" id="basic-nav-dropdown" alignRight>
            <NavDropdown.Item href="#action/3.1">Movies</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Music</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Video Games</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

// basic-navbar-nav
//collapse navbar-collapse flex-grow-0
