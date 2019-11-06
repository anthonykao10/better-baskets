import React from 'react';
import axios from "axios";
import { Button } from 'react-bootstrap';

export default function ShotSuccessButton({shotId, updateSuccess, setSuccessValue, successValue, refreshShotData}) {

  const submit = function() {
    axios.put(`http://localhost:8080/shots/${shotId}/success`, {
      success: !successValue
    })
    .then((updatedShots) => {
      setSuccessValue(!successValue)
      refreshShotData()
    })
    .catch((err) => console.log(err));
  }
  
  return (
    <div onClick = {submit}>
        {!successValue ? <Button variant="outline-secondary">Change to Score</Button> :<Button variant="outline-secondary">Change to Miss</Button>}
    </div>
  );
};
