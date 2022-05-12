import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonLinkProject from "./ButtonLinkProject";

interface ProjectProps {
    selectedProject: {
        title: string,
        description: string,
        techniques: string[],
        gitHub: string,
        linkView?: string,
        image: string
    };
}

function Project(selectedProject: ProjectProps) {
console.log(selectedProject)
    const {title, description, techniques, gitHub, linkView, image} = selectedProject.selectedProject;
    

    return (
        <div className="selected-project">
        <img src={image} alt="project screenshot" />
        <h2>{title}</h2>
        <p>Developed with: {techniques.join(", ")}.</p>
        <p>{description}</p>
        <div className="buttons-project-container">
            <ButtonLinkProject text="View" icon={<FontAwesomeIcon icon={faArrowRightToBracket} size={"2x"}/>} link={linkView}/>
            <ButtonLinkProject text="Code" icon={<FontAwesomeIcon icon={faGithub} size={"2x"}/>} link={gitHub} />
        </div>
    </div>
    );
}


export default Project;