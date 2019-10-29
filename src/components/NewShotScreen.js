import React from "react";
import {
  Link
} from 'react-router-dom'

import MediaRecorder from './NewShotComponents/MediaRecorder';
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
      <p>New Shot Screen</p>
      <Link to="/dashboard">Dashboard</Link><br></br>
      <MediaRecorder { ...videoJsOptions }/>
    </div> 
  );
}

