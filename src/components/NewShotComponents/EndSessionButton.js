
import React, {useState} from "react";
import cookies from 'js-cookie'
import axios from "axios";
import {Redirect} from "react-router-dom";

// console.log('setState:', useState);
let sessionID;
export default function EndSessionButton({addShot}) {

  sessionID = sessionID || cookies.get('sessionID');
  const [finishShot, setFinishShot] = useState(false);

  const submit = function(e) {
    e.preventDefault()
    cookies.remove('sessionID')
      setFinishShot(true);
  }

  return (
    !finishShot ?
    <div className="endSessionButton">
      <button onClick = {submit}>
        End session
      </button>
    </div>
    : 
    <Redirect to={{pathname: `/session/${sessionID}`}}/>
    
  );
}
