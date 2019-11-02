import React from 'react';
import axios from "axios";

export default function ShotSuccessButton({shotId, successVal, updateSuccess}) {

  const submit = function() {
    console.log('button')
    axios.put(`http://localhost:8002/shots/${shotId}/success`, {
      success: !successVal
    })
    .then((updatedShots) => {
      console.log('!!!updatedShots:', updatedShots);
      updateSuccess(updatedShots.data);
    })
    .catch((err) => console.log(err));
  }
  
  return (
    <div className="">
      <button onClick = {submit}>
        {!successVal ? '+' : '-'}
      </button>
    </div>
  );
};
