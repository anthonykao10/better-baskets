
import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
  Link
} from 'react-router-dom'
import './styles/Nav.css';

export default function NavBar({ onLogout, currentUser }) {
  
  return (
    <Navbar bg="light" expand="lg">
    <div className="leftContainer">
      <i className="fas fa-basketball-ball fa-2x leftItem"></i>
      <Link to="/dashboard" className="nav_logo leftItem">Better Baskets</Link>
    </div>
    <Link to="/new_shot">New Shot</Link>
    <Link to="/">Login</Link>
    <Link to="/" onClick = {onLogout}>Logout</Link>
    <h5>{currentUser}</h5>
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




