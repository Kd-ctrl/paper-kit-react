
import React, { useState } from "react";
import TopNavBar from "../../Components/js/TopNavbar";
import Content from "../../Components/js/SideNavbar_content";
import Dashboard from "pages/Components/js/NumberCard";
import NewProject from "pages/Components/js/NewProject";
import TextCard from "pages/Components/js/TextCard";

const Home = () => {
    return (
    <div className="home-container">
      
      <div className="TopNavBar">
      <TopNavBar/>
      </div>
      <div className="Sidenavbar">
        <Content/>
        </div>
        <div className="HomeBody">

        <div className="HomeGettingStarted">
          <NewProject/>
      </div>
      <div className="HomeTextCard">
        <TextCard/>
      </div>
      <div className="home-dashboard">
        <Dashboard/>
        </div>
        </div>
    </div>

    
  );
  };
  
  export default Home;
  