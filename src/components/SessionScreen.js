import React from "react";
import {
  Link,
  useParams
} from 'react-router-dom'

import NavBar from './NavBar';
 
export default function SessionScreen() {

  let { id } = useParams();

  return (
    <div>
      <NavBar /> 
      <p>Session Screen: { id }</p>
      <Link to="/dashboard">Dashboard</Link><br></br>
      <Link to="/new_shot">New Shot</Link>
    </div> 
  );
}