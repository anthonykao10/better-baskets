import React, {useState} from 'react';
import cookies from 'js-cookie'
import './App.css';
import NavBar from './components/NavBar';

import NewShotScreen from './components/NewShotScreen';
import LoginScreen from './components/LoginScreen';
import DashboardScreen from './components/DashboardScreen';
import ShotScreen from './components/ShotScreen';
import SessionScreen from './components/SessionScreen';

import useApplicationData from './hooks/useApplicationData';
import axios from "axios";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

function App() {
  const [cookieValue, setCookieValue] = useState(cookies.get("userID"));
  
  const isLoggedIn = function() {
    let cookie = cookies.get("userID")
    setCookieValue(cookie)
  }

  const handleLogout = function() {
    setCookieValue(null)
    cookies.remove('userID')
  }

  const handleLogin = function() {
    isLoggedIn()
  }

  return (
    <div className="App">
{cookieValue ? <AuthenticatedRouter onLogout = {handleLogout}/> : <UnauthenticatedRouter onLogin = {handleLogin}/>}
    </div>
  );
}

function AuthenticatedRouter(props) {

  const {
    currentUser,
    userData,
    sessionData,
    shotData,
    addShot, 
    addSession,
    shotUploadComplete,
    setShotUploadComplete
  } = useApplicationData(cookies.get("userID"));

  function refreshShotData() {
    console.log('refreshShotData called');
    axios.get(`/shots/${cookies.get("userID")}/data`)
    .then((updatedShots) => {
      console.log('calling addShot with:', updatedShots.data);
      addShot(updatedShots.data)
      setShotUploadComplete(true);
    })
  }

  console.log('shotData:', shotData);

  return (
    <div>
      <Router>
          <NavBar onLogout = {props.onLogout} currentUser={currentUser}/> 
        <Switch>
          <Route exact path="/">
            <DashboardScreen userData={userData} sessionData={sessionData} shotData={shotData} addSession={addSession}/>
          </Route>

          <Route path="/new_shot">
            <NewShotScreen addShot={addShot} refreshShotData={refreshShotData} shotUploadComplete={shotUploadComplete} setShotUploadComplete={setShotUploadComplete}/>
          </Route>

          <Route exact path="/session/:id">
            <SessionScreen sessionData={sessionData} shotData={shotData}/>
          </Route>

          <Route exact path="/shot/:id">
            <ShotScreen shotData={shotData}/>
          </Route>
          <Route path="*">
            <Redirect to='/'/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

function UnauthenticatedRouter(props) {
  return (
    <Router>
      <NavBar /> 
      <Switch>
        <Route exact path="/">
          <LoginScreen onLogin = {props.onLogin}/>
        </Route> 
        <Route>
          <Redirect from='*' to='/' />
        </Route> 
      </Switch>
    </Router>
  )
}

export default App;

