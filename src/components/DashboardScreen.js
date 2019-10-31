import React from "react";
import {
  Link
} from 'react-router-dom'
 
import useDashboardData from '../hooks/useDashboardData';
import NewSessionButton from './DashboardComponents/NewSessionButton'

export default function DashboardScreen() {

useDashboardData();
  
  return (
    <div>
      <p>Dashboard Screen</p>
      <Link to="/new_shot">New Shot</Link>
      <NewSessionButton />
    </div> 
  );
}