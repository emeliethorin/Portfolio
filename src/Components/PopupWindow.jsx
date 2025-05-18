import React from "react";
import ProjectOne from "./ProjectOne";

const PopupWindow = ({ title, info, onClick }) => {
    return (
        <div className="flex-container">
        <ProjectOne title="Group project" heading="About the project"/>
        <button onClick={onClick} className="close-button">
            Close PopupWindow</button>
        </div>
    )
}

export default PopupWindow;