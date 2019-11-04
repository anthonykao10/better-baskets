import React from "react";
import LoginForm from './LoginComponents/LoginForm'
import {getClient, refreshClient} from '../services/axiosClient'
import cookies from 'js-cookie';
// import { Canvas } from 'react-canvas-js';

 
export default function LoginScreen(props) {

  const submit = function(username, password) {
    getClient().post(`users/login`, {
        username: username,
        password: password
      },)
      .then((response) => {
        cookies.set('userID', response.data.ID)
        refreshClient()
        props.onLogin()
      })
      .catch((err) => {
        console.log(err)
      });
  }

  // const sample3 = {
  //   "maxParticles": 50,
  // "colors": [
  //   "#2E1D62",
  //   "#513D91",
  //   "#487EEF",
  //   "#11A887"
  // ],
  // "shapes": [
  //   "circle"
  // ],
  // "size": 10,
  // "minSpeed": 0.05,
  // "maxSpeed": 0.2,
  // "alpha": 0.7,
  // "backgroundColor": "transparent"
  // };

  return (
    <div>
      {/* <Canvas options={sample3} className="canvas" /> */}
      <strong><h3>Login to Start Practicing</h3></strong>
      <br></br>
      <LoginForm onSubmit = {submit} className="loginForm"/>
    </div>
      
  );
}