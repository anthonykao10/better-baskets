import React from "react";
 
import TestComponent from './DashboardComponents/TestComponent';
import Session from '../components/SessionComponents/Session';

export default function DashboardScreen({userData, sessionData, shotData}) {

  const sessions = sessionData.map(
    session => {
      return (
        <Session
        key={session.id}
        sessionID={session.id} 
        date={session.date}
        />
      );
    }
  )
  
  return (
    <div>
      <p>Dashboard Screen</p>
      <TestComponent userData={userData} sessionData={sessionData} shotData={shotData}/>
      {sessions}
    </div> 
  );
}
