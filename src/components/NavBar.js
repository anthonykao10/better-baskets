import React from "react";
import { Navbar} from 'react-bootstrap';
import {
  Link
} from 'react-router-dom'
import './styles/Nav.css';

export default function NavBar({ onLogout, currentUser, cookieValue, refreshSessionData, refreshShotData }) {

const submit = () => {
  refreshSessionData();
  refreshShotData();
}

  return (
    <Navbar className="navBar" expand="lg">
    <div className="leftContainer">
      <i className="fas fa-basketball-ball fa-3x"></i>
      <Link to="/dashboard" onClick={() => submit()} className="nav_logo">BetterBaskets</Link>
    </div>
    <div className="rightContainer">
    {!cookieValue && <strong><Link to="/">Login</Link></strong>}
    {cookieValue && <p className="user">{currentUser} |</p>}
    {cookieValue && <strong><Link to="/" onClick = {onLogout}>Logout</Link></strong>}
    </div>
  </Navbar>
  );
}




