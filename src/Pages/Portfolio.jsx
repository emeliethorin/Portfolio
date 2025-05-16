import ProjectOne from "../Components/ProjectOne";
import ProjectTwo from "../Components/ProjectTwo";

function Portfolio () {
    return <div className="flex-container">
        <ProjectOne title="Group project" heading="About the project"/>
        <ProjectTwo title="Animations" heading="About the assignment"/>
        </div>
}

export default Portfolio;