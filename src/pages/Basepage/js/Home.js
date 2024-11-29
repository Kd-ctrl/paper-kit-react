
import React, { useState } from "react";
import TopNavBar from "../../Components/js/TopNavbar";
import Content from "../../Components/js/SideNavbar_content";

const Home = () => {
    return (
    <div className=" container">
      <div>
      <TopNavBar/>
      </div>
      <div className="Sidenavbar">
        <Content/>
        </div>
      <div><h1>Welcome to Home Page</h1></div>
    </div>
  );
  };
  
  export default Home;
  