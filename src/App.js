import React from 'react';
import ReactMediaRecorder from "react-media-recorder";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
  <div>
    <ReactMediaRecorder
      video
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
