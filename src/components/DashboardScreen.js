import React from "react";
import {
  Link
} from 'react-router-dom'
 
import useDashboardData from '../hooks/useDashboardData';
import NewSessionButton from './DashboardComponents/NewSessionButton'
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
      <Link to="/new_shot">New Shot</Link>
      <NewSessionButton />
      <TestComponent userData={userData} sessionData={sessionData} shotData={shotData}/>
      {sessions}
    </div> 
  );
}
