import React from "react";
import {
  Link
} from 'react-router-dom'
 
export default function Session({sessionID, date}) {

  return (
    <div>
      <p>Session: {sessionID}</p>
      <p>Date: {date}</p>
      <Link to={`/session/${sessionID}`}>Session Link</Link>
    </div> 
  );
}