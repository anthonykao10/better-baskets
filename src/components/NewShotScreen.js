import React from "react";
import {
  Link
} from 'react-router-dom'

import MediaRecorder from './MediaRecorder';
import NavBar from './NavBar';

const videoJsOptions = {
  controls: true,
  width: 320,
  height: 240,
  fluid: false,
  plugins: {
      record: {
          audio: false,
          video: true,
          maxLength: 10,
          debug: true
      }
  }
};
 
export default function NewShotScreen() {
  
  return (
    <div>
      <NavBar /> 
      <p>New Shot Screen</p>
      <Link to="/dashboard">Dashboard</Link><br></br>
      <Link to="/review_shots">Review Shots</Link>
      <MediaRecorder { ...videoJsOptions }/>
    </div> 
  );
}