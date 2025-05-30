import "../projects.css";
import projectPic from "../assets/alien.png"
import { useState } from "react";
import PopupWindow from "./PopupWindow.jsx";

function ProjectOne(props) {
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
    }

    const closePopup = () => {
        setIsOpen(false);
    }

    return (
        <div className="project" onClick={openPopup}>
            <i className="fas fa-info-circle open-icon" style={{ color: "white", float: "right" }}></i>
            <h2 className="project-title">{props.title}</h2>
            <img src={projectPic} alt="project picture" className="project-img"/>
            <h4 className="h4">{props.heading}</h4>
            <p className="project-text">{props.tech}</p>
            <p className="project-text">{props.purpose}</p>
            <p className="project-text">{props.learnings}</p>
            <p className="project-text">{props.role}</p>
            <p className="project-text">{props.challenge}</p>
            <a href="https://github.com/ssannejohansson/SpaceWorld"
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}>Github repo</a>
            
            {isOpen && (<PopupWindow 
                title={props.title}
                info="This was my first group project! It was really nice to collaborate with others, grow ideas and get inspired from each other."
                githubLink="https://github.com/ssannejohansson/SpaceWorld"
                onClick={closePopup}
                />
                )}
        </div>
    );
}

export default ProjectOne;