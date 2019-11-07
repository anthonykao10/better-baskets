import React, {useState} from "react";
import { Button } from 'react-bootstrap';
import cookies from 'js-cookie';
import {
  Redirect
} from 'react-router-dom';

export default function DashboardPageButton({finishShot}) {
  const [redirect, setRedirect] = useState(false);

  const submit = function() {
    if (cookies.get("sessionID")) {
      setRedirect(`/session/${cookies.get("sessionID")}`)
    }
    else {
      setRedirect(`/dashboard`)
    }
  }

  return (
    !redirect ?
    <div className="currentSessionButton">
      <Button onClick = {()=> submit()}>
        Go to Current Session
      </Button>
    </div>
    : 
    <Redirect to={redirect}/>
    
  );
}
