import { Form } from "../components/Form";
import "../style/contact.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone, faMapLocationDot} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <div className="contact-container">
           
            <div className="contact-information">
                <h1>Contact Information</h1>
                <div className="information">
                <FontAwesomeIcon icon={faEnvelope} size={"lg"}/>
                    <p>matheus.s.f@outlook.com.br</p>
                </div>
                <div className="information">
                <FontAwesomeIcon icon={faPhone} size={"lg"}/>
                    <p>+55 13 3224-4214 <br/> <br/>
                       +55 13 92000-4406</p>
                </div>
                <div className="information">
                <FontAwesomeIcon icon={faMapLocationDot} size={"lg"}/>
                    <p>490, São Domingos, Santos, São Paulo, Brazil</p>
                </div>
                <h1>Social network</h1>
                <div className="information">
                    <a href="https://www.linkedin.com/in/matheus-da-silva-ferreira-84b83519a/">
                        <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
                    </a>
                    <a href="https://www.facebook.com/matheus.dasilva.37266">
                        <FontAwesomeIcon icon={faFacebookSquare} size={"2x"} /> 
                    </a>
                </div>

            </div>

            <Form />
        </div>
    );
}

export default Contact;