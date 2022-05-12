import "../style/portfolio.scss";
import projectImg1 from "../assets/imgs/projects/1.png"
import projectImg2 from "../assets/imgs/projects/2.png"
import projectImg3 from "../assets/imgs/projects/3.png"
import Project from "../components/Project";
import {useState} from "react";


function Portfolio() {

    const portfolioProjects = [
        {
            title: "Ferreira.dev",
            description: "My first responsive website that show my portfolio and a email sender.",
            techniques: [
                "Typescript",
                "React",
                "Sass"
            ],
            gitHub: "https://github.com/Matheus3Ferreira/ferreiradev",
            linkView: "https://ferreiradev.netlify.app/",
            image: projectImg1
        },
        {
            title: "Hotel Red Light Backend",
            description: "An API to provide microservices to a frontend and desktop applications of a hotel like CRUDs of clients, authentication, filters, and disponibility of reservations rooms.",
            techniques: [
                "NodeJS",
                "Typescript",
                "Express",
                "JSON web Token",
                "TypeORM",
                "PostgreSQL",
                "Cloud Application"
            ],
            gitHub: "https://github.com/Matheus3Ferreira/Hotel-RedLight-Backend",
            linkView: "https://backend-tarefa-teteu.herokuapp.com/",
            image: projectImg2
        },
        {
            title: "NLW Valoriza",
            description: "An API to help employers that want to praise or comment your teammates' work.",
            techniques: [
                "NodeJS",
                "Typescript",
                "Express",
                "JSON web Token"
            ],
            gitHub: "https://github.com/Matheus3Ferreira/NLW-Valoriza",
            image: projectImg3
        },
    ];
    
    const [selectProject, setSelectedProject] = useState(0);

    return (
        <div>
            <h1 className="title-portfolio">These are my projects</h1>
            <div className="portfolio-container">
                <Project selectedProject={portfolioProjects[selectProject]}/>
                <div className="project-list">
                    <button className="btn-project">
                        <img src={projectImg1} alt="" className={selectProject === 0 ? "btn-project selected" : "btn-project"} onClick={() => {
                        setSelectedProject(0);                        
                    }} />
                    </button>
                    <button className="btn-project">
                        <img src={projectImg2} alt="" className={selectProject === 1 ? "btn-project selected" : "btn-project"} onClick={() => {
                        setSelectedProject(1);                        
                    }} />
                    </button>
                    <button className="btn-project">
                        <img src={projectImg3} alt="" className={selectProject === 2 ? "btn-project selected" : "btn-project"} onClick={() => {
                        setSelectedProject(2);                        
                    }}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;