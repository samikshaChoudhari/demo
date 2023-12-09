import React, { useState } from "react";

export function Signup(){
const [email,setEmail] = useState('');
const [fullname,setFullname] =useState('');
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your authentication logic here (e.g., call an API endpoint)
    console.log('Email:', email);
    console.log('fullname:',fullname);
    console.log('Password:', password);

    // Reset the form after submission
    setEmail('');
    setPassword('');
    setFullname('');
  };


return (
  <div className="main">
    <div className="sub-main" >
      <div>
        <div className="image">
          
        </div>
        <div>
        <h1>The Traffic Tracking App</h1>
          <h1>SignUp Page</h1>
          <form onSubmit={handleSubmit}>
          <div>
          <input type="text" placeholder="Full Name" className="name" value={fullname}  onChange={handleFullnameChange}/>
          <input type="text" placeholder="Email" className="name" value={email}  onChange={handleEmailChange}/>
        <div className="second-input"></div>
           <input  className="name" onClick={handlePasswordChange}
                  
              type={
                      showPassword ? "text" : "password"
                  }
              placeholder="password"
              value={password}
              onChange={(e) =>
              setPassword(e.target.value)
                  }
              />
             <br></br>
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
          <button type="submit">Signup</button>
          <div>
            <p className="link">
              already have an account <a href="#">Login</a>
            </p>
          </div>
          </form>
        </div>
      </div>

    </div>
 
  </div>
);}