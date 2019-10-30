import React from "react";

export default function TestComponent({userData, sessionData, shotData}) {
  
  return (
    <div>
      <p>Test Component:</p>
      <p>{userData.username}</p>
      <p>{userData.email}</p>
      {/* <p>{sessionData[0].id}</p> */}
      {/* <p>{shotData[0].id}</p> */}
    </div> 
  );
}