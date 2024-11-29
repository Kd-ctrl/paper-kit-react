import React, { useState } from "react";
import "../css/SideNavBar.css";

const Collapsible = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapsible = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapsible-container">
            <div className="collapsible-header" onClick={toggleCollapsible}>
                <h3 className="title">{title}</h3>
                <span className="collapsible-icon">{isOpen ? "-" : "+"}</span>
            </div>
            {isOpen && <div className="collapsible-content">{children}</div>}
        </div>
    );
};

export default Collapsible;
