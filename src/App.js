import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// all "route" imports
import NewShotScreen from './components/NewShotScreen';
import LoginScreen from './components/LoginScreen';
import DashboardScreen from './components/DashboardScreen';
import ShotScreen from './components/ShotScreen';
import SessionScreen from './components/SessionScreen';

function App() {

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
