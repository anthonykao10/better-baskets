import React from "react";
import {
  Link,
  useParams
} from 'react-router-dom'

import NavBar from './NavBar';
import useSessionData from '../hooks/useSessionData';
 
export default function SessionScreen() {

  let { id } = useParams();

  useSessionData();

  return (
    <div>
      <NavBar /> 
      <p>Session Screen: { id }</p>
      <Link to="/dashboard">Dashboard</Link><br></br>
      <Link to="/new_shot">New Shot</Link>
    </div> 
  );
}