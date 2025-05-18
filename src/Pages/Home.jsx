import Profile from "./Profile";
import ProjectOne from "../Components/ProjectOne";
import ProjectTwo from "../Components/ProjectTwo";

function Home () {
    return <div className="flex-container">
        <Profile title="Profile" age="33" isStudent="true"/>
        <ProjectOne title="Group project" heading="About the project" tech="Tech used: HTML and CSS" learnings="I learned a lot about development in a group and how to collaborate efficently, but maybe I learned most about technical parts as cloning a project, creating pull requests and merge our work."/>
        <ProjectTwo title="Animations project" heading="About the assignment"/>
        </div>
}

export default Home;