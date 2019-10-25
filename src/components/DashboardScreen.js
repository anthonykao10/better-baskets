import React from "react";
import {
  Link
} from 'react-router-dom'
 
export default function DashboardScreen() {
  
  return (
    <div>
      <p>Dashboard Screen</p>
      <Link to="/new_shot">New Shot</Link><br></br>
      <Link to="/review_shots">Review Shots</Link>
    </div> 
  );
}