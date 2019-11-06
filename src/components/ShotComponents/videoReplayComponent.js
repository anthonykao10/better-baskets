import React from "react";

import '../styles/videoPlayer.css';

export default function VideoReplay({video_reference}) {
  
  return (
    <div className="videoContainer">
      <video key={video_reference} controls autoPlay className="videoPlayer">
          <source src={`https://betterbaskets.s3-us-west-1.amazonaws.com/post-${video_reference}.webm`}></source>
      </video>
    </div>
  );
}


