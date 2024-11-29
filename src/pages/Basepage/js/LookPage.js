import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../css/LookPage.css";
import  image from "../../../assets/img/images.png"

const LookPage = () => {
  const [showWorkspace, setShowWorkspace] = useState(false);
  const [change_workspace, set_workspace] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");



  const handleTransition = () => {
    setShowWorkspace(true);
    setTimeout(() => {
        set_workspace(true);
      }, 200);
  };


  if(change_workspace == true){
    navigate("/")
  }

  return (
    <div className="image-container">
    <div className="app-container">
      {!showWorkspace ? (
        <div className="home-page">
          <h1>Login </h1>
          {/* <h1>Droidal AI</h1> */}

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
          <button type="submit" onClick={handleTransition}>Login</button>
          
          <motion.div
            className="portal"
            animate={{ scale: [1, 1.5, 3], opacity: [0.75, 1, 1] }}
            transition={{ duration: 5 }}
          />
        </div>
      ) : (
        <motion.div
          className="workspace"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 20 }}
          transition={{ duration: 1 }}
        >
          <img src={image}/>
        </motion.div>

      )}
    </div>
    </div>
  );
};

export default LookPage;

