import React from 'react';
import './App.css';

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

          <Route exact path="/shot/:id">
            <ShotScreen />
          </Route>
        </Router>
    </div>
  );
}

export default App;
