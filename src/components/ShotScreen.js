import React from "react";
import {
  useParams
} from 'react-router-dom'

import ShotHeader from "./ShotComponents/ShotHeader";
import ShotChart from "./ShotComponents/ShotChart";

import VideoReplay from './ShotComponents/videoReplayComponent'

import LoginForm from './LoginComponents/LoginForm'
import VideoReplay from './ShotComponents/videoReplayComponent'
 
export default function ShotScreen({shotData}) {

  let { id } = useParams();

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

  return (
    <div>
      <p>Shot Screen: {id} </p>
      <ShotHeader {...singleShot} shotAngleAverage={shotAngleAverage}/>
      {shots}
      <VideoReplay />
    </div> 
  );
}
