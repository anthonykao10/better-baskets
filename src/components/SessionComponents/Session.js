import React from "react";
import {
  Link
} from 'react-router-dom'
import { Card } from 'react-bootstrap';
import '../styles/Carousel.css';
 
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
      return "Success: " + (successCount/count * 100).toFixed(2).replace(/\.00$/, '') + "%";
    }
  }

  const sessionSuccessPercent = successPercent();

  const dateString = () => {
   return date.slice(0, 10);   
  }

  const sessionDate = dateString();

  return (
    <div className="sessionCardDiv">
      <Card bg="light" style={{ width: '16rem' }} className="sessionCard">
        <Card.Header>
          <strong><Link to={`/session/${sessionID}`}>Session: {sessionID}</Link></strong>
        </Card.Header>
        <Card.Body>
          <Card.Title>Date: {sessionDate}</Card.Title>
          <Card.Text>
          Number of Shots: {numberOfShots}
          <br/>
          {sessionSuccessPercent}
          </Card.Text>
        </Card.Body>
      </Card>
    </div> 
  );
}