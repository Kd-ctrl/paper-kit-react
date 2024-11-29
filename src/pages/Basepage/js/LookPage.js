import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../css/LookPage.css";

const LookPage = () => {
  const [showWorkspace, setShowWorkspace] = useState(false);
  const [change_workspace, set_workspace] = useState(false);
  const navigate = useNavigate();
  const handleTransition = () => {
    setShowWorkspace(true);
    setTimeout(() => {
        set_workspace(true);
      }, 1000);
  };
  if(change_workspace == true){
    navigate("/")
  }

  return (
    <div className="image-container">
    <div className="app-container">
      {!showWorkspace ? (
        <div className="home-page">
          <h1>Welcome to the Home Page</h1>
          <button onClick={handleTransition}>Enter Workspace</button>
          
          <motion.div
            className="portal"
            animate={{ scale: [0, 1.5, 1], opacity: [0.75, 1, 1] }}
            transition={{ duration: 5 }}
          />
        </div>
      ) : (
        <motion.div
          className="workspace"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 50 }}
          transition={{ duration: 2 }}
        >
          <h1>Droidal</h1>
        </motion.div>

      )}
    </div>
    </div>
  );
};

export default LookPage;
