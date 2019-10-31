
import React from "react";
import cookies from 'js-cookie'
import axios from "axios";



export default function NewSessionButton(props) {

  const submit = function() {
    axios.post('sessions/new', {
      cookie: cookies.get('userID')
    })
    .then((response) => {
      console.log(response.data)
      cookies.set('sessionID', response.data.id)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  

  return (
    <div className="newSessionButton">
      <button onClick = {submit}>
        Create new session
      </button>
    </div>
    
  );
}
