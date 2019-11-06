import 'bootstrap/dist/css/bootstrap.min.css';

import { Card } from 'react-bootstrap';



import React from "react";
 
export default function StatCard({name, statistic}) {

  return (
     <>
      <Card style={{ width: '10rem', height: '10rem' }} className="statCard">
        <Card.Header className="titleHeader">{name}</Card.Header>
        <Card.Body>
          <Card.Title>{statistic}</Card.Title>

        </Card.Body>
      </Card>
      <br />
     </>
  );
}


