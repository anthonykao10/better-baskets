import 'bootstrap/dist/css/bootstrap.min.css';

import { Card } from 'react-bootstrap';



import React from "react";
 
export default function SessionStatFGPercentage({sessionFGPercentage}) {

  return (
     <>
      <Card bg="light" style={{ width: '10rem' }}>
        <Card.Header>Session FG Percentage</Card.Header>
        <Card.Body>
          <Card.Title>x</Card.Title>
          <Card.Text>
            {sessionFGPercentage}
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
     </>
  );
}


