import React from "react";
import {
  Link
} from 'react-router-dom'
 
import NavBar from './NavBar';
import useDashboardData from '../hooks/useDashboardData';

export default function DashboardScreen() {

useDashboardData();
  
  return (
    <div>
      <p>Dashboard Screen</p>
      <Link to="/new_shot">New Shot</Link>
    </div> 
  );
}