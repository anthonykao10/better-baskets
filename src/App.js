import React, {useState} from 'react';
import cookies from 'js-cookie'
import './App.css';
import NavBar from './components/NavBar';

// import axios from 'axios'
// all "route" imports
import NewShotScreen from './components/NewShotScreen';
import LoginScreen from './components/LoginScreen';
import DashboardScreen from './components/DashboardScreen';
import ShotScreen from './components/ShotScreen';
import SessionScreen from './components/SessionScreen';

import useApplicationData from './hooks/useApplicationData';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

function App() {
  const [cookieValue, setCookieValue] = useState(cookies.get("userID"));

  // useEffect(() => {
    // const fetchData = async () => {
    //   const res = await getClient().get('/');
    //   console.log(res.data)
    // }
    // fetchData()

    // isLoggedIn()
    // 
  // }, [])
  
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
    shotData 
  } = useApplicationData(cookies.get("userID"));

  return (
    <div>
      <Router>
          <NavBar onLogout = {props.onLogout} currentUser={currentUser}/> 
        <Switch>
          <Route exact path="/">
            <DashboardScreen userData={userData} sessionData={sessionData} shotData={shotData}/>
          </Route>

          <Route path="/new_shot">
            <NewShotScreen />
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

