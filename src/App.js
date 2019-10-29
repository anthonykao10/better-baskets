import React, {useEffect, useState} from 'react';
import cookies from 'js-cookie'
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
  Route,
  Redirect
} from 'react-router-dom'

function App() {
  const [cookieValue, setCookieValue] = useState(null);



  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await getClient().get('/');
    //   console.log(res.data)
    // }
    // fetchData()

    isLoggedIn()
  }, [])
  

  const isLoggedIn = function() {
    let cookie = cookies.get("userID")
    setCookieValue(cookie)
  }

  return (
    <div className="App">
      {cookieValue ? <AuthenticatedRouter /> : <UnauthenticatedRouter />}
    </div>
  );
}

function AuthenticatedRouter(props) {
  return (
    <Router>
      <Route exact path="/">
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
  )
}

function UnauthenticatedRouter(props) {
  return (
    <Router>
      <Route exact path="/">
        <LoginScreen />
      </Route> 
      <Route path="*">
        <Redirect to='/' />
      </Route>
    </Router>
  )
  
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