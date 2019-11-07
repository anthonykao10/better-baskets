import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '../styles/SessionStatContainer.css';


import React from "react";
 
export default function StatCard({name, statistic}) {

  return (
     <>
      <Card className="statCard">
        <Card.Header className="titleHeader cardHeader">{name}</Card.Header>
        <Card.Body className="cardBody">
          <Card.Title className="cardHeader">{statistic}</Card.Title>
        </Card.Body>
      </Card>
      <br/>
     </>
  );
}


