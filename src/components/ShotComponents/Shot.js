import React from "react";
import {
  Link
} from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../styles/Carousel.css';
 
export default function Shot({shotID, shotAngle, success}) {

  return (
    <div className="shotCardDiv">
      <Card bg="light" style={{ width: '16rem' }} className="shotCard">
        <Card.Body>
        <strong><Link to={`/shot/${shotID}`}>Shot: {shotID}</Link></strong>
          <Card.Text>
          <br/>
          {success && <i className="fas fa-trophy fa-3x"></i>}
          {!success && <i className="far fa-frown-open fa-3x"></i>}
          </Card.Text>
        </Card.Body>
      </Card>
    </div> 
  );
}