
import React from "react";
import cookies from 'js-cookie'
import axios from "axios";
import {
  Redirect,
  Link
} from 'react-router-dom'



export default function NewSessionButton({addSession}) {

  const submit = function() {
    axios.post('sessions/new', {
      cookie: cookies.get('userID')
    })
    .then((response) => {
      console.log(response.data)
      cookies.set('sessionID', response.data.id)
      addSession(response.data);
      // window.location.href="new_shot"  // HARD REFRESH
    })
    .catch((err) => {
      console.log(err)
    })
  }
  

  return (
    <div className="newSessionButton">
      <Link to="new_shot" onClick = {submit}>
        Create new session
      </Link>
      
    </div>
    
  );
}
