import React from "react";
import cookies from 'js-cookie'
import {
  Link
} from 'react-router-dom'
 
// import useDashboardData from '../hooks/useDashboardData';
import useApplicationData from '../hooks/useApplicationData';
import TestComponent from '../components/TestComponent';

export default function DashboardScreen() {

// useDashboardData();

  // useApplicationData(cookies.get("userID"))

  const {
    userData,
    sessionData,
    shotData 
  } = useApplicationData(cookies.get("userID"));
  
  return (
    <div>
      <p>Dashboard Screen</p>
      <TestComponent userData={userData} sessionData={sessionData} shotData={shotData}/>
    </div> 
  );
}

//can't pass state as prop?