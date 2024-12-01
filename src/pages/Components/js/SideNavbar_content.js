import React ,{useState} from "react";
import SideNavBar from "./SideNavbar_simple";
import "../css/SideNavBar_content.css"; 
// import Home01Icon from "../Icons/home1.tsx";

const Content = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };

    return (
        <div>
        <div className={`content-container ${isOpen ? "open" : "Closed"}`} onClick={toggleSidebar} ><div className="burger-icon" >☰ </div></div>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <div onClick={toggleSidebar} className="menu"> 
              <span className="menu-icon">Menu </span>
              <span className="burger-icon">☰</span>
              </div>
            <SideNavBar icon = "faf" title="Workspace"/>
            <SideNavBar icon = "khfkf" title="Hub"/>
            <SideNavBar icon = "khfkf" title="Dashboard"/>
            <SideNavBar icon = "khfkf" title="Market Place"/>
            <SideNavBar icon = "khfkf" title="Forum"/>
            <SideNavBar icon = "khfkf" title="License"/>
            <SideNavBar icon = "khfkf" title="Help"/>
        </div>
        </div>
        
    );
};

export default Content;
