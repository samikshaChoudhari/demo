import React, { useState } from "react";
import email from './image/email.jpg'
import pass from './image/pass.png'

export function Log(){
const [username, setUsername] = useState('');

const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your authentication logic here (e.g., call an API endpoint)
    console.log('Username:', username);
    console.log('Password:', password);

    // Reset the form after submission
    setUsername('');
    setPassword('');
  };


return (
  <div className="main">
    <div className="sub-main" >
      <div>
        <div className="image">
          
        </div>
        <div>
        <h1>The Traffic Tracking App</h1>
          <h1>Login Page</h1>
          <form onSubmit={handleSubmit}>
          <div>
            <img src={email} alt="email" className="email"/>
            <input type="text" placeholder="user name" className="name" value={username}  onChange={handleUsernameChange}/>
            <br></br>
            <div className="second-input"></div>
            <img src={pass} alt="pass" className="email"value={password}
            onChange={handlePasswordChange}/>
            {/* <input type="password" placeholder="password" className="name"/> */}
            <input  className="name"
                  
              type={
                      showPassword ? "text" : "password"
                  }
              placeholder="password"
              value={password}
              onChange={(e) =>
              setPassword(e.target.value)
                  }
              />
              <br />
              <br />
               <label for="check">Show Password</label> 
             
              <input
                  className="checkbox"
                  type="checkbox"
                  value={showPassword}
                  onChange={() =>
                      setShowPassword((prev) => !prev)
                  }
              />
          </div>
          <div className="second-input"></div>
          <button type="submit">login</button>
          <div>
            <p className="link">
              <a href="#">forgot password ?</a> or <a href="#">Sign Up</a>
            </p>
          </div>
          </form>
        </div>
      </div>

    </div>
 
  </div>
);}