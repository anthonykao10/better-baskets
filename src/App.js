import React, {useEffect, useState} from 'react';
import cookies from 'js-cookie'
import './App.css';
import NavBar from './components/NavBar';

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
    // window.location.reload(); 
  }, [])
  

  const isLoggedIn = function() {
    let cookie = cookies.get("userID")
    setCookieValue(cookie)

  }

  const handleLogout = function() {
    setCookieValue(null)
    cookies.remove('userID')

  }

  return (
    <div className="App">
{cookieValue ? <AuthenticatedRouter onLogout = {handleLogout}/> : <UnauthenticatedRouter />}
    </div>
  );
}

function AuthenticatedRouter(props) {
  return (
    <div>
      

      <Router>
      <NavBar onLogout = {props.onLogout}/> 
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
        
        <Route exact path="/logout">
         {/* <BrowserRouter forceRefresh={true} /> */}
          {/* <Redirect to='/' /> */}
        </Route>
      </Router>
    </div>
  )
}

function UnauthenticatedRouter(props) {
  return (
    <Router>
      <NavBar onLogout = {props.onLogout}/> 
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

