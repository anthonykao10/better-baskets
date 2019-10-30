import React from "react";
import {
  Link,
  useParams
} from 'react-router-dom'
 
export default function SessionScreen() {
  let { id } = useParams();

  return (
    <div>
      <p>Session Screen: { id }</p>
      <Link to="/dashboard">Dashboard</Link><br></br>
      <Link to="/new_shot">New Shot</Link>
    </div> 
  );
}