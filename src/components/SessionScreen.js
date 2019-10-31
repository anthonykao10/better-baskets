import React from "react";
import {
  useParams
} from 'react-router-dom'

import Shot from './ShotComponents/Shot';
import SessionHeader from './SessionComponents/SessionHeader';

export default function SessionScreen({shotData, sessionData}) {
  let { id } = useParams();

  const shots = shotData.map(
    shot => {
      return (
        <Shot
        key={shot.id}
        shotID={shot.id} 
        shotAngle={shot.angle}
        />
      );
    }
  )

  const singleSession = sessionData.find((item) => item.id === parseInt(id));

  return (
    <div>
      <p>Session Screen: { id }</p>
      <SessionHeader {...singleSession}/>
      {shots}
    </div> 
  );
}