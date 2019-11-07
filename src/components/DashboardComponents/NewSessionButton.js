
import React, {useState} from "react";
import cookies from 'js-cookie';
import axios from "axios";
import {
  Redirect
} from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function NewSessionButton({addSession, setShotUploadComplete}) {
  const [redirect, setRedirect] = useState(false);

  const submit = function() {

    axios.post('sessions/new', {
      cookie: cookies.get('userID')
    })
    .then((response) => {
      cookies.set('sessionID', response.data.id)
      setRedirect("/new_shot")  
      setShotUploadComplete(false)    
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    !redirect ?
    <div className="newSessionButton">
      <Button variant="primary" to="/dashboard" onClick = {submit} >
        Start New Session
      </Button>
    </div>
    : <Redirect to ={redirect} />
    
  );
}
