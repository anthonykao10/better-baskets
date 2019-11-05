import React, {useState, useEffect} from "react";
import {
  useParams
} from 'react-router-dom'

import ShotHeader from "./ShotComponents/ShotHeader";
import ShotChart from "./ShotComponents/ShotChart";
import ShotSuccessButton from "./ShotComponents/ShotSuccessButton";
import ShotDeleteButton from "./ShotComponents/shotDeleteButton";
import VideoReplay from './ShotComponents/videoReplayComponent';

import "./styles/backButton.css";
 
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

  const generateShotCoordinates = (shot) => {
    if( shot && shot.coordinates.length ) {
      // console.log('IN GENERATE', [['x', shot.id], ...shot.coordinates]);
      console.log('GENERATE SHOT COORDS', shot);
      return [['x', `${shot.id}`], ...shot.coordinates];
    }
    return [];
  };

  const shotCoords = generateShotCoordinates(singleShot);


  // console.log(shotCoords);

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


  return (
    <div>
      <h3>Shot {id} </h3> 
      <div className="backButton">
        <i className="fas fa-arrow-left fa-3x" onClick={() => window.history.back()}></i><p>Back to Session</p>
      </div>
      {/* <button variant="primary" onClick={() => window.history.back()}>Back to Session</button> */}
      <VideoReplay {...singleShot}/>
      <ShotHeader {...singleShot} shotAngleAverage={shotAngleAverage}/>
      <ShotDeleteButton shotId={id} refreshShotData={refreshShotData}></ShotDeleteButton>
      <h3>success:</h3>
      <ShotSuccessButton shotId={id} updateSuccess={updateSuccess} successValue = {successValue} setSuccessValue={setSuccessValue} refreshShotData={refreshShotData}/>
      <ShotChart coordinates={shotCoords}/>}
    </div> 
  );
}
