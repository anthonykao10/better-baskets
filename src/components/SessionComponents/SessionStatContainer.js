
import SessionStatAngle from './SessionStatCards/SessionStatAngle'
import SessionStatFG from './SessionStatCards/SessionStatFG'
import SessionStatFGPercentage from './SessionStatCards/SessionStatFGPercentage'
import SessionStatArc from './SessionStatCards/SessionStatArc'
import SessionStatEFG from './SessionStatCards/SessionStatEFG'
import StatCard from './StatCard'

import '../styles/SessionStatContainer.css'

import React from "react";
 
export default function SessionStatContainer({sessionAngle, sessionFG, sessionFGPercentage, sessionArc, userFG, userFGPercentage, userAngle, userArc}) {

  console.log("USERFG", userFG, "userFGPERCENTAGE", userFGPercentage, "userAngle", userAngle, "userArc", userArc)
  return (
     <>
     <div className="statContainer">

       <div className="sessionStatContainer">
        <StatCard name={"Session FG Percentage"} statistic = {sessionFGPercentage}></StatCard>
        <StatCard name={"Session Field Goals"} statistic = {sessionFG}></StatCard>
        <StatCard name={"Session Average Angle"} statistic = {sessionAngle}></StatCard>
        <StatCard name={"Session Average Arc"} statistic = {sessionArc}></StatCard>
        <StatCard name={"Session EFG Percentage"} statistic = {"39.7%"}></StatCard>
      </div>

      <div className ="overallStatContainer">

        <StatCard name={"Overall FG Percentage"} statistic = {userFGPercentage}></StatCard>
        <StatCard name={"Overall Field Goals"} statistic = {userFG}></StatCard>
        <StatCard name={"Overall Average Angle"} statistic = {userAngle}></StatCard>
        <StatCard name={"Overall Average Arc"} statistic = {userArc}></StatCard>
        <StatCard name={"Overall EFG Percentage"} statistic = {"40.5%"}></StatCard>
      </div>



     </div>
     </>
  );
}


