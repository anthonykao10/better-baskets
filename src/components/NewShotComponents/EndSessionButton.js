
import React from "react";
import cookies from 'js-cookie'
import axios from "axios";
import {Redirect} from "react-router-dom";
import { Button } from 'react-bootstrap';

let sessionID;
export default function EndSessionButton({ finishShot, refreshSessionData, setFinishShot}) {

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
  }
 
  return (
    !finishShot ?
    <div className="endSessionButton">
      <Button onClick = {submit} variant="success">
        End session
      </Button>
    </div>
    : 
    <Redirect to={{pathname: `/session/${sessionID}`}}/>
    
  );
}
