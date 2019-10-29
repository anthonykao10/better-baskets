import React, {useEffect} from 'react';
import './App.css';
// import axios from 'axios'

import {getClient} from './services/axiosClient'
// all "route" imports
import NewShotScreen from './components/NewShotScreen';
import LoginScreen from './components/LoginScreen';
import DashboardScreen from './components/DashboardScreen';
import ShotScreen from './components/ShotScreen';
import SessionScreen from './components/SessionScreen';


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

function App() {

  useEffect(() => {
    const fetchData = async () => {
      const res = await getClient().get('/');
      console.log(res.data)
    }

    fetchData()
  }, [])
  

  return (
    <div className="App">
      <Router>
          <Route exact path="/">
            <LoginScreen />
          </Route>

          <Route exact path="/dashboard">
            <DashboardScreen />
          </Route>

          <Route exact path="/new_shot">
            <NewShotScreen />
          </Route>

          <Route exact path="/session/:id">
            <SessionScreen />
          </Route>

          <Route exact path="/session/:session_id/shot/:id">
            <ShotScreen />
          </Route>
        </Router>
    </div>
  );
}

export default App;




// <header className="App-header">
 
// <div>
//  <ReactMediaRecorder
//    video
//    blobPropertyBag={{type: "video/mp4"}}
//    whenStopped={(video) => {
//      uploadVideo(video) 
//      // sendVideoToServer(video)
//    }}

//    render={({ status, startRecording, stopRecording, mediaBlob }) => (
//      <div>
//        <p>{status}</p>
//        <button onClick={startRecording}>Start Recording</button>
//       <button onClick={stopRecording}>Stop Recording</button>
//        <video src={mediaBlob} controls />
//      </div>
//    )}
//  />
// </div>

//    </header>