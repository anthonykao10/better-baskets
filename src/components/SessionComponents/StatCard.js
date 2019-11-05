import 'bootstrap/dist/css/bootstrap.min.css';

import { Card } from 'react-bootstrap';



import React from "react";
 
export default function StatCard({name, statistic}) {

  return (
     <>
      <Card bg="light" style={{ width: '10rem', height: '10rem' }} className="statCard">
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <Card.Title>{statistic}</Card.Title>
          {/* <Card.Text>
            {statistic}
          </Card.Text> */}
        </Card.Body>
      </Card>
      <br />
     </>
  );
}


