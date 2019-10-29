
import React, {useState} from "react";


export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(username,password)
  } 
  
  return (
    <div className="container">
      <form>
        <label>Username: </label>
        <input type="text" placeholder="Enter Username" name="username" onChange={e => setUsername(e.target.value)} required></input>

        <label>Password: </label>
        <input type="password" placeholder="Enter Password" name="password" onChange = {e => setPassword(e.target.value)} required></input>
        
        <a onClick = {onSubmit}>Login</a>
      </form>
    </div>
    
  );
}
