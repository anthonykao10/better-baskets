import cookies from 'js-cookie'
import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
  Link
} from 'react-router-dom'
import './styles/Nav.css';

export default function NavBar({ onLogout, currentUser, cookieValue }) {
  // {shotUploadComplete ? <EndSessionButton addShot={addShot}></EndSessionButton> : <DashboardPageButton></DashboardPageButton>}
// {cookies.get()}

  const sessionCookie = cookies.get("sessionID");

  return (
    <Navbar bg="light" expand="lg">
    <div className="leftContainer">
      <i className="fas fa-basketball-ball fa-2x"></i>
      <Link to="/dashboard" className="nav_logo">BetterBaskets</Link>
    </div>

    {/* <div className="centerContainer">
      {sessionCookie && <Link to="new_shot">Add Shot</Link>}  
    </div> */}

    <div className="rightContainer">
    {!cookieValue && <Link to="/">Login</Link>}
    {cookieValue && <p className="user">{currentUser} |</p>}
    {cookieValue && <Link to="/" onClick = {onLogout}>Logout</Link>}
    </div>
    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">

        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>

      </Nav>
    </Navbar.Collapse> */}
  </Navbar>
  );
}




