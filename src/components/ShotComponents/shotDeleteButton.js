import React, {useState} from 'react';
import axios from "axios";
import {
  Redirect
} from 'react-router-dom'
import { Button } from 'react-bootstrap';


export default function ShotDeleteButton({shotId, refreshShotData}) {
  const [redirect, setRedirect] = useState(false);

  let id = "";

  const submit = function() {
    axios.post(`http://localhost:8080/shots/${shotId}/delete`, {
    })
    .then((res) => {
      console.log(res.data);
      id = res.data;
      setRedirect(`/session/${id}`)
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
      <Redirect to={{pathname: `${redirect}`}}/>
  );
};
