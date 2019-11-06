import 'bootstrap/dist/css/bootstrap.min.css';

import { Card } from 'react-bootstrap';



import React from "react";
 
export default function RedStatCard({name, statistic}) {

  return (
     <>
      <Card border="danger" style={{ width: '10rem' }} className="statCard redStatCard">
        <Card.Header className="titleHeader">{name}</Card.Header>
        <Card.Body>
          <Card.Title>{statistic}</Card.Title>
 
        </Card.Body>
      </Card>
      <br />
     </>
  );
}


