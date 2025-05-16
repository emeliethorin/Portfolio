import "../projects.css";
import projectPic from "../assets/alien.png"

function ProjectOne(props) {

    return (
        <div className="project">
            <h2 className="project-title">{props.title}</h2>
            <img src={projectPic} alt="project picture" className="project-img"/>
            <h4 className="h4">{props.heading}</h4>
            <p className="project-text">Tech used: HTML and CSS.</p>
            <p className="project-text">The main assignment in this {props.title} was to build a website on a given theme with some required pages, features and a specific color.</p>
            <p className="project-text">I learned a lot about development in a group and how to collaborate efficently, but maybe I learned most about technical parts as cloning a project, creating pull requests and merge our work.</p>
            <p className="project-text">I created a design in Adobe XD to create some ideas to build on and I documented our meetings etc. Also was also responsible for coding the startpage.</p>
            <p className="project-text">I think the biggest challenge we had was the insecurity around doing everything in the right way as a group, as none of us had experience from this type of work.</p>
            <a href="https://github.com/ssannejohansson/SpaceWorld" className="project-link">Github repo</a>
        </div>
    );
}

export default ProjectOne;