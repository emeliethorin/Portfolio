import ProjectOne from "../Components/ProjectOne";
import ProjectTwo from "../Components/ProjectTwo";
import React, { useState } from 'react';

const LaunchProjects = () => {
    const [showProjects, setShowProjects] = useState(false);

    const handleClick = () => {
        setShowProjects(true);
    };

    return (
    <div>
        <button className="submit-btn" onClick={handleClick}>Click to view projects</button>

        {showProjects && ( 
            <div className="flex-container">
                <ProjectOne title="Group project" heading="About the project"/>
                <ProjectTwo title="Animations" heading="About the assignment"/>
            </div>
        )}
    </div>
    );
};

export default LaunchProjects;