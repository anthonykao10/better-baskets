import React from "react";

export default function VideoReplay({video_reference}) {
  
  return (
    <div className="videoContainer">
      <video controls autoPlay>
          <source src={`https://betterbaskets.s3-us-west-1.amazonaws.com/post-${video_reference}.webm`}></source>
      </video>
    </div>
  );
}



