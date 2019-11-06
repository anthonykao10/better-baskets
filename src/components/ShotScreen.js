import React, {useState, useEffect} from "react";
import {
  useParams
} from 'react-router-dom'

import ShotSuccessButton from "./ShotComponents/ShotSuccessButton";
import ShotDeleteButton from "./ShotComponents/shotDeleteButton";
import VideoReplay from './ShotComponents/videoReplayComponent';
import ShotChart from './ShotComponents/ShotChart';
import { shotArcDetermination } from '../services/shotCalculations';
import { Jumbotron, Button } from 'react-bootstrap';
import "./styles/backButton.css";
import "./styles/shotHeader.css";
 
export default function ShotScreen({shotData, updateSuccess, refreshShotData}) {
  const [successValue, setSuccessValue] = useState(false);

  let { id } = useParams();

  useEffect(() => {  

    successValueFunction();
  }, [shotData])

  const successValueFunction = function() {
    // Create updated shot object
    const shotIdx = shotData.findIndex((item) => item.id === parseInt(id));
    // console.log("SHOT DATA LENGTH", shotData.length)
    if (shotData.length > 0){
      setSuccessValue(shotData[shotIdx].success)
    }
    else {
      return
    }
  }

  // const shots = shotData.map(
  //   shot => {
  //     return (
  //       <ShotChart
  //       key={shot.id}
  //       shotID={shot.id} 
  //       shotAngle={shot.angle}
  //       />
  //     );
  //   }
  // )

  const singleShot = shotData.find((item) => item.id === parseInt(id));

  console.log('SINGLE SHOT', singleShot);
  console.log('SINGLE SHOT', singleShot);
  console.log('SINGLE SHOT', singleShot);

  const generateShotCoordinates = (shot) => {
    if( shot && shot.coordinates.length ) {
      // console.log('IN GENERATE', [['x', shot.id], ...shot.coordinates]);
      // console.log('GENERATE SHOT COORDS', shot);
      return [['x', `${shot.id}`], ...shot.coordinates];
    }
    return [];
  };

  const shotCoords = generateShotCoordinates(singleShot);

  //Average of shot angle (all shots from all sessions)
  const angleAverage = () => {
    let sum = 0

    shotData.forEach((item) => {
      sum += item.angle;
    })

    const count = shotData.length;

    return sum/count;
  }

  const shotAngleAverage = angleAverage();

  const chartTitle = "Shot Arc";

  return (
    <div>
      <Jumbotron className="shotHeader">
        <h1>Shot #{id} Review</h1>
        <Button variant="primary" onClick={() => window.history.back()}>Back to Session</Button>
        <br></br>
        <br></br>
        <h3>Angle: <em>{singleShot && singleShot.angle}°</em></h3>
        <h3>Max Height: <em>{singleShot && shotArcDetermination(singleShot.arc_max)}</em></h3>
        <h3>Success: <em>{singleShot && (singleShot.success ? "True" : "False")}</em></h3>
        <ShotSuccessButton shotId={id} updateSuccess={updateSuccess} successValue = {successValue} setSuccessValue={setSuccessValue} refreshShotData={refreshShotData}/>
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
