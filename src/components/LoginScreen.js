import React from "react";
import LoginForm from './LoginComponents/LoginForm'
import {getClient, refreshClient} from '../services/axiosClient'
import cookies from 'js-cookie';
import { Canvas } from 'react-canvas-js';

 
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

  const sample3 = {
    "maxParticles": 0,
  "shapes": [
    {
      "type": "image",
      "src": "https://images.vexels.com/media/users/3/127117/isolated/preview/75741f0d611d334c461b2d184ead2c70-basketball-icon-silhouette-by-vexels.png"
    },
    {
      "type": "image",
      "src": "https://images.vexels.com/media/users/3/127117/isolated/preview/75741f0d611d334c461b2d184ead2c70-basketball-icon-silhouette-by-vexels.png"
    },
    {
      "type": "image",
      "src": "https://images.vexels.com/media/users/3/127117/isolated/preview/75741f0d611d334c461b2d184ead2c70-basketball-icon-silhouette-by-vexels.png"
    },
    {
      "type": "image",
      "src": "https://images.vexels.com/media/users/3/127117/isolated/preview/75741f0d611d334c461b2d184ead2c70-basketball-icon-silhouette-by-vexels.png"
    },
    {
      "type": "image",
      "src": "https://images.vexels.com/media/users/3/127117/isolated/preview/75741f0d611d334c461b2d184ead2c70-basketball-icon-silhouette-by-vexels.png"
    },
    {
      "type": "image",
      "src": "https://images.vexels.com/media/users/3/127117/isolated/preview/75741f0d611d334c461b2d184ead2c70-basketball-icon-silhouette-by-vexels.png"
    },
    {
      "type": "image",
      "src": "https://images.vexels.com/media/users/3/127117/isolated/preview/75741f0d611d334c461b2d184ead2c70-basketball-icon-silhouette-by-vexels.png"
    },
    {
      "type": "image",
      "src": "https://images.vexels.com/media/users/3/127117/isolated/preview/75741f0d611d334c461b2d184ead2c70-basketball-icon-silhouette-by-vexels.png"
    },
    {
      "type": "image",
      "src": "https://images.vexels.com/media/users/3/127117/isolated/preview/75741f0d611d334c461b2d184ead2c70-basketball-icon-silhouette-by-vexels.png"
    },
    {
      "type": "image",
      "src": "https://images.vexels.com/media/users/3/127117/isolated/preview/75741f0d611d334c461b2d184ead2c70-basketball-icon-silhouette-by-vexels.png"
    }
  ],
  "size": 80,
  "minSpeed": 0.5,
  "maxSpeed": 2.0,
  "alpha": 0.7,
  "backgroundColor": "transparent"
  };

  return (
    <div>
      <strong><h3>Login to Start Practicing</h3></strong>
      <br></br>
      <LoginForm onSubmit = {submit} className="loginForm"/>
      <Canvas options={sample3} className="canvas" />
      <Canvas options={sample3} className="canvas" />
    </div>
      
  );
}