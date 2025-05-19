import React from "react";
import "../popupwindow.css";

const PopupWindow = ({ title, info, githubLink, onClick }) => {
  return (
    <div className="popup-overlay" onClick={onClick}>
      <div className="popup-window" onClick={e => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{info}</p>
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="popup-github-link"
          >
            View GitHub Repo
          </a>
        )}
        <br />
        <button onClick={onClick} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupWindow;
