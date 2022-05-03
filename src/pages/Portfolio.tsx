import "../style/portfolio.scss";
import projectImg from "../assets/imgs/project.png"
import ButtonProject from "../components/ButtonProject";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faArrowRightToBracket} from "@fortawesome/free-solid-svg-icons";



function Portfolio() {
    return (
        <div>

            <h1 className="title-portfolio">These are my projects</h1>
        <div className="portfolio-container">
            <div className="selected-project">
                <img src={projectImg} alt="project screenshot" />
                <h2>Project's title</h2>
                <p>Developed with: Typescript, React, Bootstrap, Sass</p>
                <p>Este é o meu primeiro site pessoal, feito para tudo.</p>
                <div className="buttons-project-container">
                    <ButtonProject text="View" icon={<FontAwesomeIcon icon={faArrowRightToBracket} size={"2x"}/>} link="#"/>
                    <ButtonProject text="Code" icon={<FontAwesomeIcon icon={faGithub} size={"2x"}/>} link="#" />
                </div>
            </div>
            <div className="project-list">
                <img src={projectImg} alt="" />
                <img src={projectImg} alt="" />
                <img src={projectImg} alt="" />
            </div>
        </div>
        </div>
    )
}

export default Portfolio;