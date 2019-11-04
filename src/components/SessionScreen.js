import React, {useEffect, useState} from "react";
import {
  useParams
} from 'react-router-dom'
import Shot from './ShotComponents/Shot';
import SessionHeader from './SessionComponents/SessionHeader';
import SessionDeleteButton from './SessionComponents/sessionDeleteButton'
import {sessionFieldGoalCalculation, sessionAngleAverage} from '../services/sessionCalculations'
import SessionStatContainer from './SessionComponents/SessionStatContainer'
import {userFieldGoalCalculation, userAngleAverage} from '../services/overallCalculations'

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
    let val = ((successNumber/shotsBySession.length) * 100) + "%"
    setSessionFG(successNumber + "/" + shotsBySession.length)
    setSessionFGPercentage(val)
    setSessionAngle(sessionAngleAverage(shotsBySession))

    let userSuccessNumber = userFieldGoalCalculation(shotData)
    let userVal = ((userSuccessNumber/shotData.length) * 100) + "%"
    setUserFG(userSuccessNumber + "/" + shotData.length)
    setUserFGPercentage(userVal)
    setUserAngle(userAngleAverage(shotData))
    
  }, [shotData])


  const shots = shotsBySession.map(
    shot => {
      return (
        <Shot
        key={shot.id}
        shotID={shot.id} 
        shotAngle={shot.angle}
        />
      );
    }
  )

  //find information for the single session
  const singleSession = sessionData.find((item) => item.id === parseInt(id));

  return (
    <div>
      <p>Session Screen: { id }</p>
      <SessionHeader {...singleSession}/>
      <SessionDeleteButton sessionId={id} refreshShotData={refreshShotData} refreshSessionData={refreshSessionData}></SessionDeleteButton>
      <SessionStatContainer sessionFG={sessionFG} sessionFGPercentage={sessionFGPercentage} sessionAngle={sessionAngle} sessionArc={sessionArc} userFG={userFG} userFGPercentage={userFGPercentage} userAngle={userAngle} userArc={userArc}></SessionStatContainer>
      {shots}
    </div> 
  );
}