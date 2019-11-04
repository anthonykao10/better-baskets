
import React, {useState} from "react";
import cookies from 'js-cookie'
import axios from "axios";
import {Redirect} from "react-router-dom";

// console.log('setState:', useState);
let sessionID;
export default function EndSessionButton({addShot, finishShot, setFinishShot}) {

  sessionID = sessionID || cookies.get('sessionID');

  const submit = function(e) {
    e.preventDefault()
    cookies.remove('sessionID')
      setFinishShot(true);
      axios.put(`/sessions/${sessionID}/end_session`)
        .then(() => console.log("ended session"))
        .catch((err) => {
          console.log(err);
        })
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
