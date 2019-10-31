import React from "react";
import {
  Link
} from 'react-router-dom'
 
export default function Shot({shotID, shotAngle}) {

  return (
    <div>
      <p>Shot: {shotID}</p>
      <p>Angle:{shotAngle}</p>
      <Link to={`/shot/${shotID}`}>Shot Link</Link>
      <p>*****</p>
    </div> 
  );
}