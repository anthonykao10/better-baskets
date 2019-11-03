import React from "react";
import {
  Link
} from 'react-router-dom'
import { Card } from 'react-bootstrap';
import '../styles/Carousel.css';
import { FileSystemCredentials } from "aws-sdk";
 
export default function Session({sessionID, date, shotData}) {

  const shotsBySession = shotData.filter((item) => item.session_id === parseInt(sessionID));

  const numberOfShots = shotsBySession.length;
  
  const successPercent = () => {
    let successCount = 0;
    const count = shotsBySession.length;
    
    shotsBySession.forEach((item) => {
      if(item.success === true) {
        successCount += 1;
      }    
    })

    if(count === 0) {
      return 'Success: No Shots Taken';
    } else {
      return "Success: " + successCount/count * 100 + "%";
    }
  }

  const sessionSuccessPercent = successPercent();

  return (
    <div className="sessionCardDiv">
      {/* <p>Session: {sessionID}</p>
      <i class="fas fa-basketball-hoop"></i>
      <p>Date: {date}</p>
      <Link to={`/session/${sessionID}`}>Session Link</Link> */}

      <Card bg="light" style={{ width: '16rem' }} className="sessionCard">
        <Card.Header>
          <Link to={`/session/${sessionID}`}>Session: {sessionID}</Link>
        </Card.Header>
        <Card.Body>
          <Card.Title>Date: {date}</Card.Title>
          <Card.Text>
          
          <p>Number of Shots: {numberOfShots}</p>
          <p>{sessionSuccessPercent}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div> 
  );
}