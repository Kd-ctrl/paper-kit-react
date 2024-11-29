import React from "react";
import "../css/SideNavBar_simple.css";

const SideNavBar = ({icon, title}) => {

    return (
        <div className="side-nav-item">
            <div className="side-nav-icon">{icon}</div>
            <div className="side-nav-title">{title}</div>
        </div>
    );
};

export default SideNavBar;
