import React from 'react';
import axios from "axios";

export default function EditButton({shotId, successVal, updatedShots, updateSuccess}) {

  const submit = function() {
    console.log('button')
    axios.put(`http://localhost:8002/shots/${shotId}/success`, {
      success: successVal
    })
    .then((response) => {
      console.log(response.data);
      updateSuccess(updatedShots);
    })
    .catch((err) => console.log(err));
  }
  
  return (
    <div className="">
      <button onClick = {submit}>
        +
      </button>
    </div>
  );
};
