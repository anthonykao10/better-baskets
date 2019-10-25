import React from "react";
import MediaRecorder from '../components/MediaRecorder';
import {
  Link
} from 'react-router-dom'
 
export default function NewShotScreen() {
  
  return (
    <div>
      <p>New Shot Screen</p>
      <Link to="/dashboard">Dashboard</Link><br></br>
      <Link to="/review_shots">Review Shots</Link>
      <MediaRecorder />
    </div> 
  );
}