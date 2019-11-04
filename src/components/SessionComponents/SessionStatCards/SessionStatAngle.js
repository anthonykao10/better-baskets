import 'bootstrap/dist/css/bootstrap.min.css';

import { Card } from 'react-bootstrap';



import React from "react";
 
export default function SessionStatAngle({sessionAngle}) {

  return (
     <>
      <Card bg="light" style={{ width: '10rem' }}>
        <Card.Header>Session Angle</Card.Header>
        <Card.Body>
          <Card.Title>x</Card.Title>
          <Card.Text>
            {sessionAngle}
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
     </>
  );
}


