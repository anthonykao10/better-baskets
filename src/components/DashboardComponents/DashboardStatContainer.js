import StatCard from '../SessionComponents/StatCard'
import {userFieldGoalCalculation, userAngleAverage, userArcDetermination} from '../../services/overallCalculations'


import '../styles/SessionStatContainer.css'

import React, { useEffect, useState } from "react";
 
export default function DashboardStatContainer({shotData, sessionData}) {
  const [userFG, setUserFG] = useState(0);
  const [userFGPercentage, setUserFGPercentage] = useState(0);
  const [userAngle, setUserAngle] = useState(null);
  const [userArc, setUserArc] = useState("High");
  const [totalSessions, setTotalSessions] = useState(0);
  const [totalPracticeTime, setTotalPracticeTime] = useState(0);
  const [avgShotsInSession, setAvgShotsInSession] = useState(0);

  useEffect(() => {  

    let userSuccessNumber = userFieldGoalCalculation(shotData)
    let userVal = ((userSuccessNumber/shotData.length) * 100).toFixed(2) + "%"
    setUserFG(userSuccessNumber + "/" + shotData.length)
    setUserFGPercentage(userVal)
    setUserAngle(userAngleAverage(shotData).toFixed(2)+ "°")
    setTotalSessions(sessionData.length)
    setAvgShotsInSession(shotData.length/sessionData.length)
    setUserArc(userArcDetermination(shotData))
    
  }, [shotData])

  return (
     <>
     <div className="statContainer">

     <div className ="statContainerTop">
      <StatCard name={"Overall FG Percentage"} statistic = {userFGPercentage}></StatCard>
      <StatCard name={"Overall Field Goals"} statistic = {userFG} ></StatCard>
      <StatCard name={"Overall Average Angle"} statistic = {userAngle} ></StatCard>
      <StatCard name={"Overall Average Arc"} statistic = {userArc} ></StatCard>
      <StatCard name={"Overall EFG Percentage"} statistic = {"40.5%"} ></StatCard>
    </div>

    <div className="statContainerBottom">
      <StatCard name={"Total Sessions"} statistic = {totalSessions} ></StatCard>
      <StatCard name={"Total Practice Time"} statistic = {2} ></StatCard>
      <StatCard name={"Average Shots Per Session"} statistic = {avgShotsInSession.toFixed(2)} ></StatCard>
      <StatCard name={"Global Balling Ranking"} statistic = {"211th"} ></StatCard>
      <StatCard name={"Friends Balling Ranking"} statistic = {"23rd"} ></StatCard>
    </div>





     </div>
     </>
  );
}


