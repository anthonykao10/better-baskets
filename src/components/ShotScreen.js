import React from "react";
import {
  Link,
  useParams
} from 'react-router-dom'

import NavBar from './NavBar';
import useShotData from "../hooks/useShotData";
 
export default function ShotScreen() {

  let { session_id, id } = useParams();

  useShotData(id);

  return (
    <div>
      <NavBar /> 
      <p>Session: {session_id} </p>
      <p>Shot Screen: {id} </p>
      <Link to="/dashboard">Dashboard</Link><br></br>
      <Link to="/new_shot">New Shot</Link>
    </div> 
  );
}