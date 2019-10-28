import React, {useState} from "react";
import {
  Link
} from 'react-router-dom'

import NavBar from './NavBar';
import LoginForm from './LoginComponents/LoginForm'

import useLoginData from '../hooks/useLoginData';
 
export default function LoginScreen() {

  

  return (
    <div>
      <NavBar /> 
      <p>Login Screen</p>
      {useLoginData()}
      <LoginForm />
    </div>
      
  );
}