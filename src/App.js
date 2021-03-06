import React, {useState} from 'react';
import cookies from 'js-cookie';
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
} from 'react-router-dom';

function App() {
  const [cookieValue, setCookieValue] = useState(cookies.get("userID"));

  const isLoggedIn = function() {
    let cookie = cookies.get("userID");
    setCookieValue(cookie);
  }

  const handleLogout = function() {
    setCookieValue(null);
    cookies.remove('userID');
  }

  const handleLogin = function() {
    isLoggedIn();
  }

  return (
    <div className="App">
      {cookieValue ? <AuthenticatedRouter onLogout={handleLogout}/> : <UnauthenticatedRouter onLogin={handleLogin}/>}
    </div>
  );
}

function AuthenticatedRouter(props) {
 
  const {
    currentUser,
    userData,
    sessionData,
    shotData,
    updateSuccess,
    addShot,
    addSession,
    shotUploadComplete,
    setShotUploadComplete
  } = useApplicationData(cookies.get("userID"));

  function refreshShotData() {
    axios.get(`/shots/${cookies.get("userID")}/data`)
    .then((updatedShots) => {
      addShot(updatedShots.data)
      setShotUploadComplete(true);
    })
  }
 
  function refreshSessionData() {
    axios.get(`/sessions/${cookies.get("userID")}/data`)
    .then((updatedSessions) => {
      addSession(updatedSessions.data)
    })
  }

  return (
    <div>
      <Router>
          <NavBar onLogout = {props.onLogout} currentUser={currentUser} cookieValue addSession={addSession} setShotUploadComplete={setShotUploadComplete} refreshSessionData={refreshSessionData} refreshShotData={refreshShotData}/> 
        <div className="mainContainer">
        <Switch>
          <Route exact path="/">
            <DashboardScreen userData={userData} sessionData={sessionData} shotData={shotData} addSession={addSession} setShotUploadComplete={setShotUploadComplete}/>
          </Route>

          <Route path="/new_shot">
            <NewShotScreen addShot={addShot} refreshShotData={refreshShotData} refreshSessionData={refreshSessionData} shotUploadComplete={shotUploadComplete} setShotUploadComplete={setShotUploadComplete} />
          </Route>

          <Route exact path="/session/:id">
            <SessionScreen sessionData={sessionData} shotData={shotData} refreshShotData={refreshShotData} refreshSessionData={refreshSessionData}/>
          </Route>

          <Route exact path="/shot/:id">
            <ShotScreen shotData={shotData} updateSuccess={updateSuccess} refreshShotData={refreshShotData}/>
          </Route>
          <Route path="*">
            <Redirect to='/'/>
          </Route>
        </Switch>
        </div>
      </Router>
    </div>
  )
}

function UnauthenticatedRouter(props) {
  return (
    
    <Router>
      <NavBar /> 
      <div className="mainContainer">
      <Switch>
        <Route exact path="/">
          <LoginScreen onLogin = {props.onLogin}/>
        </Route> 
        <Route>
          <Redirect from='*' to='/' />
        </Route> 
      </Switch>
      </div>
    </Router>  
  )
}

export default App;

