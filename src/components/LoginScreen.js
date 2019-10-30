import React from "react";
import LoginForm from './LoginComponents/LoginForm'
import {getClient, refreshClient} from '../services/axiosClient'
import cookies from 'js-cookie'


 
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
  

  return (
    <div>
      <p>Login Screen</p>
      <LoginForm onSubmit = {submit} />
    </div>
      
  );
}