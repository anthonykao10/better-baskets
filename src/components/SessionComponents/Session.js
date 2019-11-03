import React from "react";
import {
  Link
} from 'react-router-dom'
import { Card } from 'react-bootstrap';
import '../styles/Carousel.css';
 
export default function Session({sessionID, date}) {

  return (
    <div className="sessionCardDiv">
      {/* <p>Session: {sessionID}</p>
      <i class="fas fa-basketball-hoop"></i>
      <p>Date: {date}</p>
      <Link to={`/session/${sessionID}`}>Session Link</Link> */}

      <Card bg="light" style={{ width: '16rem' }} className="sessionCard">
        <Card.Header>Session: {sessionID}</Card.Header>
        <Card.Body>
          {/* <Card.Title>Session: {sessionID}</Card.Title> */}
          <Card.Text>
          <Link to={`/session/${sessionID}`}>Session Link</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div> 
  );
}