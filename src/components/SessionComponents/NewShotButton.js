import React, {useState} from "react";
import { Button } from 'react-bootstrap';
import {
  Redirect
} from 'react-router-dom';

export default function NewShotPageButton({finishShot}) {
  const [redirect, setRedirect] = useState(false);

  const submit = function() {
    setRedirect(`/new_shot`)

  }

  return (
    !redirect ?
    <div >
      <Button onClick = {()=> submit()}>
        Create new shot
      </Button>
    </div>
    : 
    <Redirect to={redirect}/>
    
  );
}
