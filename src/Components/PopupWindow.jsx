import React from "react";
import "../popupwindow.css";

const PopupWindow = ({ title, info, onClick }) => {
    console.log("PopupWindow rendered");
    
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="popup-overlay">
            <div className="popup-window">
                <h2>{title}</h2>
                <p>{info}</p>
                <a href="https://github.com/ssannejohansson/SpaceWorld" className="project-link">Github repo</a>
                <button onClick={onClick} className="close-button">
                    Close</button>
                    
            </div>
        </div>
    )
}

export default PopupWindow;