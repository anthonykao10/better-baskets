import React from "react";
 
export default function SessionHeader({date, coords}) {
let coordstring = JSON.stringify(coords);
  return (
    <div>
      <p>*****</p>
      <p>Session Header</p>
      <p>Session Date: {date}</p>
      <p>*****</p>
    </div> 
  );
}