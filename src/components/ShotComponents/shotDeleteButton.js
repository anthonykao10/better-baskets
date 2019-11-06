import React, {useState} from 'react';
import axios from "axios";
import {
  Redirect
} from 'react-router-dom'
import { Button } from 'react-bootstrap';


export default function ShotDeleteButton({shotId, refreshShotData}) {
  const [redirect, setRedirect] = useState(false);

  const submit = function() {
    axios.post(`http://localhost:8080/shots/${shotId}/delete`, {
    })
    .then((updatedShots) => {
      setRedirect("/")
      refreshShotData()
    })
    .catch((err) => console.log(err));
  }
  
  return (
    !redirect ?
    <div className="">
      <Button variant="danger" onClick = {submit}>
        Delete shot
      </Button>
    </div>
      : 
      <Redirect to={{pathname: `/`}}/>
  );
};
