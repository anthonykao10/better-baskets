
import React, {useState} from "react";
import cookies from 'js-cookie'
import axios from "axios";
import {
  Redirect,
  Link
} from 'react-router-dom'
import { Button } from 'react-bootstrap';


export default function NewSessionButton({addSession, setShotUploadComplete}) {
  const [redirect, setRedirect] = useState(false);

  const submit = function() {

    axios.post('sessions/new', {
      cookie: cookies.get('userID')
    })
    .then((response) => {
      console.log(response.data)
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
        Start new session
      </Button>
    </div>
    : <Redirect to ={redirect} />
    
  );
}
