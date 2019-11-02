import React from "react";

export default function VideoReplay(props) {
  
  return (
    <div className="videoContainer">
      <video controls autoPlay>
          <source src="https://betterbaskets.s3-us-west-1.amazonaws.com/newTestANTHONY.webm"></source>
      </video>
    </div>
  );
}



