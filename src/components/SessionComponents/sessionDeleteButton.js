import React, {useState} from 'react';
import axios from "axios";
import {
  Redirect
} from 'react-router-dom'

export default function SessionDeleteButton({sessionId, refreshShotData, refreshSessionData}) {
  const [redirect, setRedirect] = useState(false);

  const submit = function() {
    axios.post(`http://localhost:8080/sessions/${sessionId}/delete`, {
    })
    .then((updatedShots) => {
      
      refreshShotData()
      refreshSessionData()
      setRedirect("true")

      
    })
    .catch((err) => console.log(err));
  }
  
  return (
    !redirect ?
    <div className="">
      <button onClick = {submit}>
        Delete session
      </button>
    </div>
      : 
      <Redirect to={{pathname: `/`}}/>
  );
};
