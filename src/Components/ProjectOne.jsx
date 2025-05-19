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
            <p className="project-text">The main assignment in this {props.title} was to build a website on a given theme with some required pages, features and a specific color. We got Space as a them and a green color.</p>
            <p className="project-text">{props.learnings}</p>
            <p className="project-text">I created a design in Adobe XD to create some ideas to build on and I documented our meetings etc. Also was also responsible for coding the startpage.</p>
            <p className="project-text">I think the biggest challenge we had was the insecurity around doing everything in the right way as a group, as none of us had experience from this type of work.</p>
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