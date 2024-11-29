import React from "react";
import Collapsible from "./SideNavbar"; // Adjust the import path to where your Collapsible component resides
import "../css/TestNavBar.css"; // Create and style this CSS file for the sidebar

const SideNavbar = () => {
    return (
        <div className="sidebar">
            <Collapsible title="Section 1">
                <ul>
                    <li className="si">Subitem 1.1</li>
                    <li className="si">Subitem 1.2</li>
                    <li className="si">Subitem 1.3</li>
                </ul>
            </Collapsible>
            <Collapsible title="Section 2">
                <ul>
                    <li className="si">Subitem 2.1</li>
                    <li className="si">Subitem 2.2</li>
                    <li className="si">Subitem 2.3</li>
                </ul>
            </Collapsible>
            <Collapsible title="Section 3">
                <ul>
                    <li className="si">Subitem 3.1</li>
                    <li className="si">Subitem 3.2</li>
                    <li className="si">Subitem 3.3</li>
                </ul>
            </Collapsible>
        </div>
    );
};

export default SideNavbar;
