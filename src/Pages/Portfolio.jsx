import Project from '../Components/Project';
import React, { useState } from 'react';
import alienPic from "../assets/alien.png";
import balloonPic from "../assets/heart-balloons.png";

const LaunchProjects = () => {
    const [showProjects, setShowProjects] = useState(false);

    const handleClick = () => {
        setShowProjects(prev => !prev);
    };

    const projects = [
        {
            title: "Group project",
            heading: "About the project",
            image: alienPic,
            tech: "Tech used: HTML and CSS",
            purpose:
                "The main assignment in this project was to build a website on a given theme with some required pages, features and a specific color. We got Space as a theme and a green color.",
            learnings:
                "I learned a lot about development in a group and how to collaborate efficiently, but maybe I learned most about technical parts such as cloning a project, creating pull requests and merging our work.",
            role:
                "I created a design in Adobe XD to create some ideas to build on and I documented our meetings etc. Also was responsible for coding the start page.",
            challenge:
                "The biggest challenge was the insecurity around doing everything the right way as a group, since none of us had experience with this type of work.",
            githubLink: "https://github.com/ssannejohansson/SpaceWorld",
            popupInfo:
                "This was my first group project! It was really nice to collaborate with others, grow ideas and get inspired from each other."
        },
        {
            title: "Animations project",
            heading: "About the assignment",
            image: balloonPic,
            tech: "Tech used: HTML and CSS",
            purpose:
                "The main requirements were to build a small website including at least one CSS transition, one keyframe animation, and one animation from an external library like animate.css.",
            learnings:
                "I created a Valentine's website where you can send a message to someone. I learned how to implement several different animations.",
            role: "",
            challenge: "",
            githubLink: "https://github.com/emeliethorin/valentines",
            popupInfo:
                "I really like how animations can improve the user experience and make the website more dynamic."
        }
    ];

    return (
        <div>
            <button className="submit-btn" onClick={handleClick}>
                {showProjects ? "Hide projects" : "View all projects"}
            </button>

            {showProjects && (
                <div className="flex-container">
                    {projects.map((project, index) => (
                        <Project key={index} {...project} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default LaunchProjects;