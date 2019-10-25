import React from "react";
import ReactMediaRecorder from "react-media-recorder";
 
export default function MediaRecorder({ status, startRecording, stopRecording, mediaBlob }) {
  
  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <video src={mediaBlob} controls />
    </div> 
  );
}