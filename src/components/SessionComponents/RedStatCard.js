import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '../styles/SessionStatContainer.css';
import React from "react";
 
export default function RedStatCard({name, statistic}) {

  return (
     <>
      <Card border="danger" className="statCard redStatCard">
        <Card.Header className="titleHeader cardHeader">{name}</Card.Header>
        <Card.Body>
          <Card.Title className="cardHeader">{statistic}</Card.Title>
        </Card.Body>
      </Card>
      <br />
     </>
  );
}


