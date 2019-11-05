
import React, {useState} from "react";
import { Button } from 'react-bootstrap';


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
      <Button onClick = {()=> submit()}>
        Back to Dashboard
      </Button>
    </div>
    : 
    <Redirect to={redirect}/>
    
  );
}
