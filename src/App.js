import React from 'react';
import ReactMediaRecorder from "react-media-recorder";
import logo from './logo.svg';
import './App.css';
import uploadVideo from './videoUpload'
import axios from 'axios'

function App() {
console.log(process.env)
  const sendVideoToServer = function(videoBlob) {

    axios.post(`http://localhost:3002`, {videoBlob
    })
    .then(() => {
      console.log("Successful post to http://localhost:3002")
    })
    
  }


  return (
    <div className="App">
      <header className="App-header">

  <div>
    <ReactMediaRecorder
      video
      blobPropertyBag={{type: "video/mp4"}}
      whenStopped={(video) => {
        uploadVideo(video) 
        // sendVideoToServer(video)
      }}

      render={({ status, startRecording, stopRecording, mediaBlob }) => (
        <div>
          <p>{status}</p>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          <video src={mediaBlob} controls />
        </div>
      )}
    />
  </div>

      </header>
    </div>
  );
}

export default App;
