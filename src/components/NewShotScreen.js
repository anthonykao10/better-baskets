import React, {useState} from "react";
import {
  Link
} from 'react-router-dom'

import MediaRecorder from './NewShotComponents/MediaRecorder';
import EndSessionButton from './NewShotComponents/EndSessionButton'
import DashboardPageButton from "./NewShotComponents/DashboardPageButton";


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

export default function NewShotScreen({addShot, refreshShotData, refreshSessionData, shotUploadComplete}) {
  const [finishShot, setFinishShot] = useState(false);

  
  return (
    <div>
      <p>New Shot Screen</p>
      <Link to="/dashboard">Dashboard</Link><br></br>
      <MediaRecorder { ...videoJsOptions } refreshShotData={refreshShotData}/>
      {shotUploadComplete ? 
      <EndSessionButton addShot={addShot} finishShot={finishShot} setFinishShot={setFinishShot} refreshSessionData={refreshSessionData}></EndSessionButton> 
      : <DashboardPageButton finishShot={finishShot} setFinishShot={setFinishShot}></DashboardPageButton>}
    </div> 
  );
}

