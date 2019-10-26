import React, { Component } from 'react';
// import ReactMediaRecorder, { status, startRecording, stopRecording, mediaBlob} from "react-media-recorder";
// import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import NewShotScreen from './components/NewShotScreen';
import LoginScreen from './components/LoginScreen';
import DashboardScreen from './components/DashboardScreen';
import ReviewShotsScreen from './components/ReviewShotsScreen';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          {/* <Route path="/">
            <NavBar />  
          </Route> */}
          <Route exact path="/">
            <LoginScreen />
          </Route>

          <Route exact path="/dashboard">
            <DashboardScreen />
          </Route>

          <Route exact path="/new_shot">
            <NewShotScreen />
          </Route>

          <Route exact path="/review_shots">
            <ReviewShotsScreen />
          </Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
