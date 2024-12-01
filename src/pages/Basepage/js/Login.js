import React, { useState } from "react";
import "../css/Login.css"; // Import the CSS file
import { useNavigate } from "react-router-dom"; 

const API_URL = "http://127.0.0.1:8000/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/app");
  }
  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(API_URL, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ user: email, pwd: password }),
  //     });

  //     if (response ) {
  //       const data = await response.json();
  //       if (data != false){
  //         setMessage(`Success: ${data.message}`);
  //         navigate("/app");
  //       }
  //       else{
  //         const error = "UserName or Password is Wrong"
  //         setMessage(`Error: ${error}`)
  //       }
  //     } else {
  //       const error = await response.json();
  //       setMessage(`Error: ${error.message}`);
  //     }
  //   } catch (err) {
  //     setMessage("Error connecting to the server");
  //     console.error(err);
  //   }
  // };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="card">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="card">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
