import React from "react";
import {
  Link,
  useParams
} from 'react-router-dom'

import Shot from '../components/Shot';
import SessionHeader from './SessionHeader';

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