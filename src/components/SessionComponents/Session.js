import React from "react";
import {
  Link
} from 'react-router-dom'
import { Card } from 'react-bootstrap';

 
export default function Session({sessionID, date}) {

  return (
    <div>
      {/* <p>Session: {sessionID}</p>
      <i class="fas fa-basketball-hoop"></i>
      <p>Date: {date}</p>
      <Link to={`/session/${sessionID}`}>Session Link</Link> */}

      <Card bg="light" style={{ width: '18rem' }}>
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