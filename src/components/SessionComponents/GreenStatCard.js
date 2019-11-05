import 'bootstrap/dist/css/bootstrap.min.css';

import { Card } from 'react-bootstrap';



import React from "react";
 
export default function GreenStatCard({name, statistic}) {

  return (
     <>
      <Card border="success" style={{ width: '10rem' }} className="statCard">
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <Card.Title>{statistic}</Card.Title>
        </Card.Body>
      </Card>
      <br />
     </>
  );
}


