import React, {useState} from "react";
import {
  Link
} from 'react-router-dom'

import MediaRecorder from './NewShotComponents/MediaRecorder';
import EndSessionButton from './NewShotComponents/EndSessionButton'
import DashboardPageButton from "./NewShotComponents/DashboardPageButton";
import CurrentSessionButton from "./NewShotComponents/CurrentSessionButton"


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

export default function NewShotScreen({addShot, refreshShotData, refreshSessionData, shotUploadComplete, setShotUploadComplete}) {
  const [finishShot, setFinishShot] = useState(false);

  
  return (
    <div>
      <h2 className="titleHeader">Take Your Best Shot</h2>
      <MediaRecorder { ...videoJsOptions } refreshShotData={refreshShotData} setShotUploadComplete={setShotUploadComplete} />
      <br></br>
      <div className = "newShotButtons">
      <CurrentSessionButton></CurrentSessionButton>
      {shotUploadComplete ? 
      <EndSessionButton addShot={addShot} finishShot={finishShot} setFinishShot={setFinishShot} refreshSessionData={refreshSessionData}></EndSessionButton> 
      : <DashboardPageButton finishShot={finishShot} setFinishShot={setFinishShot} refreshSessionData={refreshSessionData} refreshShotData={refreshShotData}></DashboardPageButton>} 
      </div>
    </div> 
  );
}

