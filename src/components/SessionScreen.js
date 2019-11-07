import React, {useEffect, useState} from "react";
import {
  useParams
} from 'react-router-dom';
import Shot from './ShotComponents/Shot';
import SessionHeader from './SessionComponents/SessionHeader';
import SessionDeleteButton from './SessionComponents/sessionDeleteButton';
import ShotChart from "./ShotComponents/ShotChart";
import {sessionFieldGoalCalculation, sessionAngleAverage, sessionArcDetermination} from '../services/sessionCalculations';
import SessionStatContainer from './SessionComponents/SessionStatContainer';
import {userFieldGoalCalculation, userAngleAverage, userArcDetermination} from '../services/overallCalculations';
import NewShotPageButton from './SessionComponents/NewShotButton';
import cookies from 'js-cookie';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles/Carousel.css';
import './styles/sessionHeader.css';

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
    let successNumber = sessionFieldGoalCalculation(shotsBySession);

    let val = ((successNumber/shotsBySession.length) * 100);
    if (!val) {
      val = "0%";
    }
    else {
      val = val.toFixed(2).replace(/\.00$/, '') + "%";
    }

    setSessionFG(successNumber + "/" + shotsBySession.length);
    setSessionFGPercentage(val);
    setSessionAngle(sessionAngleAverage(shotsBySession).toFixed(2).replace(/\.00$/, ''));
    setArc(sessionArcDetermination(shotsBySession));

    let userSuccessNumber = userFieldGoalCalculation(shotData);
    let userVal = ((userSuccessNumber/shotData.length) * 100).toFixed(2).replace(/\.00$/, '') + "%";
    setUserFG(userSuccessNumber + "/" + shotData.length);
    setUserFGPercentage(userVal);
    setUserAngle(userAngleAverage(shotData).toFixed(2).replace(/\.00$/, ''));
    setUserArc(userArcDetermination(shotData));
    
  }, [shotData, shotsBySession]);

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

  const generateAllShotCoordinates = (shotsArr) => {
    if( shotsArr && shotsArr[0] && shotsArr[0].coordinates) {

      let output = [];
      for(let [shotIndex, shot] of shotsArr.entries()) {
        for(let [index, coords] of shot.coordinates.entries()) {
          if(!output[index]){
            output[index] = [];
          }
          output[index][shotIndex] = coords[1];
        }
      }
      output = output.map((arr, i) => [i, ...arr]);

      // get shot id's:
      const shotIDs = shotsArr.map(shot => `${shot.id}`);
      shotIDs.unshift('x');

      output = [shotIDs, ...output];
      return output;
    }
    
    return [];
  };

  const coords = generateAllShotCoordinates(shotsBySession);

  //find information for the single session
  const singleSession = sessionData.find((item) => item.id === parseInt(id));

  //carousel responsive options
  const responsive = {
    desktop_wide: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, 
    },
    desktop: {
      breakpoint: { max: 1599, min: 1025 },
      items: 4,
      slidesToSlide: 4, 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, 
    },
  };

  const chartTitle = "Session Arcs";

  return (
    <div>
      <SessionHeader {...singleSession} id={id}/>
      {cookies.get("sessionID") === id ? 
      <div className="newShotPageButton">
        <NewShotPageButton></NewShotPageButton>
        <SessionDeleteButton sessionId={id} refreshShotData={refreshShotData} refreshSessionData={refreshSessionData}></SessionDeleteButton> 
      </div> 
      : <SessionDeleteButton sessionId={id} refreshShotData={refreshShotData} refreshSessionData={refreshSessionData}></SessionDeleteButton>}
      <br/>
      {coords.length > 0 && <ShotChart coordinates={coords} chartTitle={chartTitle}/>} 
      <SessionStatContainer sessionFG={sessionFG} sessionFGPercentage={sessionFGPercentage} sessionAngle={sessionAngle} sessionArc={sessionArc} userFG={userFG} userFGPercentage={userFGPercentage} userAngle={userAngle} userArc={userArc}></SessionStatContainer>
      <br/>
      <br/>
      <div className="Carousel">
      <Carousel
        swipeable={true}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
      >
        {shots}
      </Carousel> 
      </div>
    </div> 
  );

}