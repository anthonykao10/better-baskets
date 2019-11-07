

import StatCard from './StatCard'
import RedStatCard from './RedStatCard'
import GreenStatCard from './GreenStatCard'

import '../styles/SessionStatContainer.css'

import React from "react";
 
export default function SessionStatContainer({sessionAngle, sessionFG, sessionFGPercentage, sessionArc, userFG, userFGPercentage, userAngle, userArc}) {
  
  let newSessionAngle
  if (isNaN(sessionAngle)) {
    newSessionAngle = 0;
  }
  else {
    newSessionAngle = sessionAngle
  }


  return (
     <>
     <div className="statContainer">

       <div className="statContainerTop">
         {eval(sessionFG) >= eval(userFG) ? <GreenStatCard name={"Session FG Percentage"} statistic = {sessionFGPercentage} ></GreenStatCard> : <RedStatCard name={"Session FG Percentage"} statistic = {sessionFGPercentage} ></RedStatCard> }
         {eval(sessionFG) >= eval(userFG) ? <GreenStatCard name={"Session Field Goals"} statistic = {sessionFG} ></GreenStatCard> : <RedStatCard name={"Session Field Goals"} statistic = {sessionFG} ></RedStatCard>}


        {/* IF GREATER THEN 3 DEGREES OFF */}
        {Math.abs(sessionAngle - userAngle) < 3 ? <GreenStatCard name={"Session Average Angle"} statistic = {newSessionAngle + "°"} ></GreenStatCard> : <RedStatCard name={"Session Average Angle"} statistic = {newSessionAngle + "°"} ></RedStatCard>} 
        

        {sessionArc === userArc ? <GreenStatCard name={"Session Average Arc"} statistic = {sessionArc} ></GreenStatCard> : <RedStatCard name={"Session Average Arc"} statistic = {sessionArc} ></RedStatCard>}

        { 39.7 > 40.5 ? <GreenStatCard name={"Session EFG Percentage"} statistic = {"39.7%"} ></GreenStatCard> : <RedStatCard name={"Session EFG Percentage"} statistic = {"39.7%"} ></RedStatCard>}
      </div>

      <div className ="statContainerBottom">

        <StatCard name={"Overall FG Percentage"} statistic = {userFGPercentage}></StatCard>
        <StatCard name={"Overall Field Goals"} statistic = {userFG} ></StatCard>
        <StatCard name={"Overall Average Angle"} statistic = {userAngle} ></StatCard>
        <StatCard name={"Overall Average Arc"} statistic = {userArc} ></StatCard>
        <StatCard name={"Overall EFG Percentage"} statistic = {"40.5%"} ></StatCard>
      </div>



     </div>
     </>
  );
}


