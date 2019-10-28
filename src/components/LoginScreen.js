import React from "react";
import {
  Link
} from 'react-router-dom'

import NavBar from './NavBar';

import useLoginData from '../hooks/useLoginData';
 
export default function LoginScreen() {
  
  useLoginData();

  return (
    <div>
      <NavBar /> 
      <p>Login Screen</p>
    </div> 
  );
}