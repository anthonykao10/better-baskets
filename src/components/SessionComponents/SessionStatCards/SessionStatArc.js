import 'bootstrap/dist/css/bootstrap.min.css';

import { Card } from 'react-bootstrap';



import React from "react";
 
export default function SessionStatArc({sessionArc}) {

  return (
     <>
      <Card bg="light" style={{ width: '10rem' }}>
        <Card.Header>Session Arc</Card.Header>
        <Card.Body>
          <Card.Title>x</Card.Title>
          <Card.Text>
            High
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
     </>
  );
}


