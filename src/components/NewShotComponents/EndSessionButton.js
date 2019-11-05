
import React, {useState} from "react";
import cookies from 'js-cookie'
import axios from "axios";
import {Redirect} from "react-router-dom";
import { Button } from 'react-bootstrap';

let sessionID;
export default function EndSessionButton({addShot, finishShot, refreshSessionData, setFinishShot}) {

  sessionID = sessionID || cookies.get('sessionID');

  const submit = function(e) {
    e.preventDefault()
    axios.put(`/sessions/${sessionID}/end_session`)
      .then(() => console.log("ended session"))
      .then(() => refreshSessionData())
      .then(() => cookies.remove('sessionID'))
      .then(() => setFinishShot(true))
      .catch((err) => {
        console.log(err);
      })
    // cookies.remove('sessionID')
    // setFinishShot(true);  
  }
 
  return (
    !finishShot ?
    <div className="endSessionButton">
      <Button onClick = {submit}>
        End session
      </Button>
    </div>
    : 
    <Redirect to={{pathname: `/session/${sessionID}`}}/>
    
  );
}
