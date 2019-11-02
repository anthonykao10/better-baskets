import React from "react";
import {
  useParams
} from 'react-router-dom'

import ShotHeader from "./ShotComponents/ShotHeader";
import ShotChart from "./ShotComponents/ShotChart";
import ShotSuccessButton from "./ShotComponents/ShotSuccessButton";

import VideoReplay from './ShotComponents/videoReplayComponent'
 
export default function ShotScreen({shotData, updateSuccess}) {
  
  let { id } = useParams();

  console.log('shotData:', shotData);
  console.log('useParams id:', id);
  
  const shots = shotData.map(
    shot => {
      return (
        <ShotChart
        key={shot.id}
        shotID={shot.id} 
        shotAngle={shot.angle}
        />
      );
    }
  )

  const singleShot = shotData.find((item) => item.id === parseInt(id));

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

  // Create updated shot object
  const shotIdx = shotData.findIndex((item) => item.id === parseInt(id));
  console.log('shotIdx:', shotIdx);
  let updatedShots = shotData;
  let successVal = null;
  if (!shotIdx) {
    successVal = shotData[shotIdx].success;  
    let updatedSuccess = !shotData[shotIdx].success;
    updatedShots[shotIdx] = {...shotData[shotIdx], success: updatedSuccess};
    console.log(updatedShots, successVal)
  }
  console.log('my shot!!!:', shotData[shotIdx]);

  return (
    <div>
      <p>Shot Screen: {id} </p>
      <VideoReplay />
      <ShotHeader {...singleShot} shotAngleAverage={shotAngleAverage}/>
      <h3>success:</h3>
      <ShotSuccessButton shotId={id} successVal={successVal} updatedShots={updatedShots} updateSuccess={updateSuccess}/>
      {shots}
      
    </div> 
  );
}
