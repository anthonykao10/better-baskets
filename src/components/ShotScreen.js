import React, {useState, useEffect} from "react";
import {
  useParams
} from 'react-router-dom';
import ShotSuccessButton from "./ShotComponents/ShotSuccessButton";
import ShotDeleteButton from "./ShotComponents/shotDeleteButton";
import VideoReplay from './ShotComponents/videoReplayComponent';
import ShotChart from './ShotComponents/ShotChart';
import { shotArcDetermination, successMessages, failureMessages } from '../services/shotCalculations';
import { Jumbotron, Button } from 'react-bootstrap';
import "./styles/backButton.css";
import "./styles/shotHeader.css";
 
export default function ShotScreen({shotData, updateSuccess, refreshShotData}) {
  const [successValue, setSuccessValue] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [failureMessage, setFailureMessage] = useState('');

  let { id } = useParams();

  useEffect(() => {  
    setSuccessMessage(successMessages());
    setFailureMessage(failureMessages());
    successValueFunction();
  }, [shotData])

  const successValueFunction = function() {
    // Create updated shot object
    const shotIdx = shotData.findIndex((item) => item.id === parseInt(id));
    if (shotData.length > 0){
      setSuccessValue(shotData[shotIdx].success);
    }
    else {
      return;
    }
  }

  const singleShot = shotData.find((item) => item.id === parseInt(id));

  const generateShotCoordinates = (shot) => {
    if( shot && shot.coordinates.length ) {
      return [['x', `${shot.id}`], ...shot.coordinates];
    }
    return [];
  };

  const shotCoords = generateShotCoordinates(singleShot);

  const chartTitle = "Shot Arc";

  // shot success messaging styles
  const successMessageStyles = {
    margin: '0 auto',
    width: '75%',
    height: '160px',
    backgroundColor: '#dff9eb',
    border: '1px solid black',
    borderRadius: '10px',
    boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    padding: "18px"
  };

  const failMessageStyles = {
    margin: '0 auto',
    width: '75%',
    height: '160px',
    backgroundColor: '#fcd0d0',
    border: '1px solid black',
    borderRadius: '10px',
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    padding: "18px"
  };

  return (
    <div>
      <Jumbotron className="shotHeader">
        <h2 className="titleHeader">Shot #{id} Review</h2>
        <Button variant="primary" onClick={() => window.history.back()}>Back to Session</Button>
        <br></br>
        <br></br>
        <h3>Angle: <em>{singleShot && singleShot.angle}°</em></h3>
        <h3>Shot Arc: <em>{singleShot && shotArcDetermination(singleShot.arc_max)}</em></h3>
        <br></br>
        <div style={singleShot && (singleShot.success ? successMessageStyles : failMessageStyles)}>
          <h3><em>{singleShot && (singleShot.success ? successMessage : failureMessage)}</em></h3>
          <br></br>
          <ShotSuccessButton shotId={id} successValue = {successValue} setSuccessValue={setSuccessValue} refreshShotData={refreshShotData}/>
        </div>
        <br></br>
        <br></br>
        <ShotDeleteButton shotId={id} refreshShotData={refreshShotData}></ShotDeleteButton>
        <br></br>
        <br></br>
        <div className="videoChart">
        {singleShot && <VideoReplay {...singleShot}/>}
        {shotCoords && <ShotChart coordinates={shotCoords} chartTitle={chartTitle}/>}
        </div>
      </Jumbotron>      
    </div> 
  );
}
