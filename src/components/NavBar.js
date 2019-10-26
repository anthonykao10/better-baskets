
import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
  Link
} from 'react-router-dom'

export default function NavBar() {
  
  return (
    <Navbar bg="light" expand="container">
    <Navbar.Brand href="#home">Better Baskets</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link><Link to="/dashboard">Home</Link></Nav.Link>
        <Nav.Link><Link to="/new_shot">New Shot</Link></Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item><Link to="/review_shots">Review Shots</Link></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}




