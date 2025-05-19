import "../projects.css";
import projectPic from "../assets/heart-balloons.png"
import { useState } from "react";
import PopupWindow from "./PopupWindow.jsx";

function ProjectTwo(props) {
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
            <p className="project-text">The main requirements in this {props.title} was to build a small website including at least one CSS transition, at least one keyframe animation and at least one animation added from an external library such as animate.css. </p>
            <p className="project-text">{props.learnings}</p>
            <p className="project-text"></p>
            <p className="project-text"></p>
            <a href="https://github.com/emeliethorin/valentines" 
                className="project-link" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}>Github repo</a>

            {isOpen && (<PopupWindow 
                title={props.title}
                info="I really like how animations can improve the user experience and make the website more dynamic."
                githubLink="https://github.com/emeliethorin/valentines"
                onClick={closePopup}
                />
                )}
        </div>
    );
}

export default ProjectTwo;