import "../projects.css";
import projectPic from "../assets/heart-balloons.png"

function ProjectTwo(props) {

    return (
        <div className="project">
            <h2 className="project-title">{props.title}</h2>
            <img src={projectPic} alt="project picture" className="project-img"/>
            <h4 className="h4">{props.heading}</h4>
            <p className="project-text">Tech used: HTML and CSS.</p>
            <p className="project-text">The main requirements in this {props.title} was to build a small website including at least one CSS transition, at least one keyframe animation and at least one animation added from an external library such as animate.css. </p>
            <p className="project-text">I created a Valentines website where you can send a valentines message to someone. I learned how to implement several differrent animations and I really like how it can improve the user experience and make the website more dynamic.</p>
            <p className="project-text"></p>
            <p className="project-text"></p>
            <a href="https://github.com/emeliethorin/valentines" className="project-link">Github repo</a>
        </div>
    );
}

export default ProjectTwo;