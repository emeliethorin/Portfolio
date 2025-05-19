import React from "react";
import "../popupwindow.css";

const PopupWindow = ({ title, info, onClick }) => {
    console.log("PopupWindow rendered");
    
    return (
        <div className="popup-overlay">
            <div className="popup-window">
                <h2>{title}</h2>
                <p>{info}</p>
                <button onClick={onClick} className="close-button">
                    Close</button>
            </div>
        </div>
    )
}

export default PopupWindow;