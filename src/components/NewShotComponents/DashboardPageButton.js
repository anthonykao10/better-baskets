
import React, {useState} from "react";

import {
  Redirect
} from 'react-router-dom'

let sessionID;
export default function DashboardPageButton({finishShot}) {
  const [redirect, setRedirect] = useState(false);


  const submit = function() {
    setRedirect("/dashboard")
  }

  return (
    !redirect ?
    <div className="endSessionButton">
      <button onClick = {()=> submit()}>
        Back to Dashboard
      </button>
    </div>
    : 
    <Redirect to={redirect}/>
    
  );
}
