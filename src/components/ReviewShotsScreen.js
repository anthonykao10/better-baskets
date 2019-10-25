import React from "react";
import {
  Link
} from 'react-router-dom'
 
export default function ReviewShotsScreen() {
  
  return (
    <div>
      <p>Review Shots Screen</p>
      <Link to="/dashboard">Dashboard</Link><br></br>
      <Link to="/new_shot">New Shot</Link>
    </div> 
  );
}