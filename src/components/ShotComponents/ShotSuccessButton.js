import React from 'react';
import axios from "axios";

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
    <div className="">
      <button onClick = {submit}>
        {!successValue ? '+' : '-'}
      </button>
    </div>
  );
};
