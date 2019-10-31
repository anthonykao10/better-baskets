import React from "react";

export default function TestComponent({userData, sessionData, shotData}) {
  
  return (
    <div>
      <p>Test Component:</p>
      {/* <p>{userData['username']}</p>
      <p>{userData.id}</p> */}
      {/* <p>{sessionData[0].id}</p> */}
      {/* <p>{shotData[0].id}</p> */}
    </div> 
  );
}