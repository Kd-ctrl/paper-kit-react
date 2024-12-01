import React from "react";
import "../css/NewProject.css";
import {Button} from 'reactstrap';


const NewProject = () => {
    return(
        <div className="NewProject-Container">
            <div className="Newproject-section1">
                <div className="GettingStarted">
                    GettingStarted
                </div>
                <span className="GettingStarted-Icon">
                <img src={require("pages/icon/shuttle.png")} />
                </span>
                </div>
                <div className="NewProject-section2">
                    <span className="GettingStarted-text">
                        Create more projects and help automate more workflows
                    </span>
                    <div className="GettingStarted-Button">
                    <Button color="primary">Create Project</Button>
                    </div>
                </div>
            
        </div>
    )
}

export default NewProject;