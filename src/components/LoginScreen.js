import React, {useState} from "react";
import {
  Link
} from 'react-router-dom'

import NavBar from './NavBar';
import LoginForm from './LoginComponents/LoginForm'
import {getClient, refreshClient} from '../services/axiosClient'
import cookies from 'js-cookie'

import useLoginData from '../hooks/useLoginData';

 
export default function LoginScreen(props) {

  const submit = function(username, password) {
    getClient().post(`users/login`, {
        username: username,
        password: password
      },)
      .then((response) => {
        cookies.set('userID', response.data.ID)
        refreshClient()
        console.log(response.data, " Response.data on useLoginData.js")
        props.onLogin()
      })
      .catch((err) => {
        console.log(err)
      });
  }
  

  return (
    <div>
      <p>Login Screen</p>
      <LoginForm onSubmit = {submit} />
    </div>
      
  );
}