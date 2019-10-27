import React from "react";
import {
  Link
} from 'react-router-dom'
 
import NavBar from './NavBar';

export default function DashboardScreen() {
  
  return (
    <div>
      <NavBar />
      <p>Dashboard Screen</p>
      <Link to="/new_shot">New Shot</Link>
    </div> 
  );
}