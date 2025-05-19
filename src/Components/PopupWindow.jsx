import React from "react";
import "../popupwindow.css";

const PopupWindow = ({ title, info, onClick }) => {
    console.log("PopupWindow rendered");

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="popup-overlay" onClick={onclick}>
            <div className="popup-window" onClick={stopPropagation}>
                <h2>{title}</h2>
                <p>{info}</p>
                <a href="https://github.com/ssannejohansson/SpaceWorld" className="project-link" onClick={e => e.stopPropagation()}>Github repo</a>
                <button onClick={onClick} className="close-button">
                    Close</button>
                    
            </div>
        </div>
    )
}

export default PopupWindow;