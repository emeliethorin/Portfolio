import Profile from "./Profile";
import ProjectOne from "../Components/ProjectOne";
import ProjectTwo from "../Components/ProjectTwo";

function Home () {
    return <div className="flex-container">
        <Profile title="Profile" age="33" isStudent="true"/>
        <ProjectOne title="Group project" heading="About the project"/>
        <ProjectTwo title="Animations project" heading="About the assignment"/>
        </div>
}

export default Home;