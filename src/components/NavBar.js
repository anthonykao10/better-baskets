
import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
  Link
} from 'react-router-dom'

export default function NavBar(props) {
  
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Better Baskets</Navbar.Brand>
    <Link to="/dashboard">Home</Link>
    <Link to="/new_shot">New Shot</Link>
    <Link to="/">Login</Link>
    <Link to="/" onClick = {props.onLogout}>Logout</Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">

        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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




