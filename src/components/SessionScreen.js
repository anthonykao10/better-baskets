import React from "react";
import {
  useParams
} from 'react-router-dom'

import Shot from './ShotComponents/Shot';
import SessionHeader from './SessionComponents/SessionHeader';

export default function SessionScreen({shotData, sessionData}) {
  let { id } = useParams();

  //find shots by the session and iterate
  const shotsBySession = shotData.filter((item) => item.session_id === parseInt(id));

  const shots = shotsBySession.map(
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

  //find information for the single session
  const singleSession = sessionData.find((item) => item.id === parseInt(id));

  return (
    <div>
      <p>Session Screen: { id }</p>
      <SessionHeader {...singleSession}/>
      {shots}
    </div> 
  );
}