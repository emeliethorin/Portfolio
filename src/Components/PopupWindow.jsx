import React from "react";
import "../popupwindow.css";

const PopupWindow = ({ title, info, link, onClick }) => {
  return (
    <div className="popup-overlay" onClick={onClick}>
      <div className="popup-window" onClick={e => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{info}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
          >
            Github repo
          </a>
        )}
        <button onClick={onClick} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupWindow;
