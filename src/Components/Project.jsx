import "../projects.css";
import { useState } from "react";
import PopupWindow from "./PopupWindow.jsx";

function Project(props) {
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <div className="project">
            <i className="fas fa-info-circle open-icon" style={{ color: "white", float: "right" }} onClick={openPopup}></i>
            <h2 className="project-title">{props.title}</h2>
            <img src={props.image} alt="project" className="project-img" />
            <h4 className="h4">{props.heading}</h4>
            <p className="project-text">{props.tech}</p>
            <p className="project-text">{props.purpose}</p>
            <p className="project-text">{props.learnings}</p>
            <p className="project-text">{props.role}</p>
            <p className="project-text">{props.challenge}</p>
            <a
                href={props.githubLink}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
            >
                Github repo
            </a>

            {isOpen && (
                <PopupWindow
                    title={props.title}
                    info={props.popupInfo}
                    githubLink={props.githubLink}
                    onClick={closePopup}
                />
            )}
        </div>
    );
}

export default Project;
