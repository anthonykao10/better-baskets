import React, {useState} from "react";
import { Button } from 'react-bootstrap';

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(username,password);
  } 
  
  return (
    <div className="container">
      <form>
        <strong><label>Username: </label></strong>
        <input type="text" placeholder="Enter Username" name="username" onChange={e => setUsername(e.target.value)} required></input>
        <br></br>
        <strong><label>Password: </label></strong>
        <input type="password" placeholder="Enter Password" name="password" onChange = {e => setPassword(e.target.value)} required></input>
        <br></br>
        <Button onClick={onSubmit}>Login</Button>
      </form>
    </div>
    
  );
}
