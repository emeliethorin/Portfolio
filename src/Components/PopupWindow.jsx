import React from "react";

const PopupWindow = ({ title, info, onClick }) => {

    return (
        <div className="popup-window">
            <h2>{title}</h2>
            <p>{info}</p>
            <button onClick={onClick} className="close-button">
                Close</button>
        </div>
    )
}

export default PopupWindow;