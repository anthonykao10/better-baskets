import React, {useEffect, useState} from "react";
import {
  useParams
} from 'react-router-dom'
import Shot from './ShotComponents/Shot';
import SessionHeader from './SessionComponents/SessionHeader';
import SessionDeleteButton from './SessionComponents/sessionDeleteButton'
import {sessionFieldGoalCalculation, sessionAngleAverage, sessionArcDetermination} from '../services/sessionCalculations'
import SessionStatContainer from './SessionComponents/SessionStatContainer'
import {userFieldGoalCalculation, userAngleAverage, userArcDetermination} from '../services/overallCalculations'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles/Carousel.css';

export default function SessionScreen({shotData, sessionData, refreshShotData, refreshSessionData}) {
  const [sessionFG, setSessionFG] = useState(0);
  const [sessionFGPercentage, setSessionFGPercentage] = useState(0);
  const [sessionAngle, setSessionAngle] = useState(null);
  const [sessionArc, setArc] = useState("High");
  const [userFG, setUserFG] = useState(0);
  const [userFGPercentage, setUserFGPercentage] = useState(0);
  const [userAngle, setUserAngle] = useState(null);
  const [userArc, setUserArc] = useState("High");

  let { id } = useParams();


  //find shots by the session and iterate
  const shotsBySession = shotData.filter((item) => item.session_id === parseInt(id));

  useEffect(() => {  
    let successNumber = sessionFieldGoalCalculation(shotsBySession)
    let val = ((successNumber/shotsBySession.length) * 100).toFixed(2) + "%"
    setSessionFG(successNumber + "/" + shotsBySession.length)
    setSessionFGPercentage(val)
    setSessionAngle(sessionAngleAverage(shotsBySession).toFixed(2)+ "°")
    setArc(sessionArcDetermination(shotsBySession))

    let userSuccessNumber = userFieldGoalCalculation(shotData)
    let userVal = ((userSuccessNumber/shotData.length) * 100).toFixed(2) + "%"
    setUserFG(userSuccessNumber + "/" + shotData.length)
    setUserFGPercentage(userVal)
    setUserAngle(userAngleAverage(shotData).toFixed(2) + "°")
    setUserArc(userArcDetermination(shotData))
    
    
  }, [shotData, shotsBySession])


  const shots = shotsBySession.map(
    shot => {
      return (
        <Shot
        key={shot.id}
        shotID={shot.id}
        success={shot.success} 
        />
      );
    }
  )

  //find information for the single session
  const singleSession = sessionData.find((item) => item.id === parseInt(id));

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <h3>Session { id }</h3>
      <SessionHeader {...singleSession}/>
      <SessionDeleteButton sessionId={id} refreshShotData={refreshShotData} refreshSessionData={refreshSessionData}></SessionDeleteButton>
      <SessionStatContainer sessionFG={sessionFG} sessionFGPercentage={sessionFGPercentage} sessionAngle={sessionAngle} sessionArc={sessionArc} userFG={userFG} userFGPercentage={userFGPercentage} userAngle={userAngle} userArc={userArc}></SessionStatContainer>
      <br></br>
      <br></br>
      {/* <br></br> */}
      <Carousel
        swipeable={false}
        draggable={true}
        // showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlay={true}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
        // centerMode={true}
      >
        {shots}
      </Carousel> 
    </div> 
  );
}