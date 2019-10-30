import React from "react";
import cookies from 'js-cookie'
import {
  Link
} from 'react-router-dom'
 
// import useDashboardData from '../hooks/useDashboardData';
import useApplicationData from '../hooks/useApplicationData';

export default function DashboardScreen() {

// useDashboardData();

  useApplicationData(cookies.get("userID"))
  
  return (
    <div>
      <p>Dashboard Screen</p>
      <Link to="/new_shot">New Shot</Link>
    </div> 
  );
}