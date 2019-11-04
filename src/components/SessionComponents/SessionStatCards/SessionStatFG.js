import 'bootstrap/dist/css/bootstrap.min.css';

import { Card } from 'react-bootstrap';



import React from "react";
 
export default function SessionStatFG({sessionFG}) {

  return (
     <>
      <Card bg="light" style={{ width: '10rem' }}>
        <Card.Header>Session Field Goals</Card.Header>
        <Card.Body>
          <Card.Title>x</Card.Title>
          <Card.Text>
            {sessionFG}
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
     </>
  );
}


