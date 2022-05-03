import { ReactNode } from 'react';
import "../style/button-project.scss";


interface ButtonProjectProps {
    icon: ReactNode,
    link: string,
    text: string
}


function ButtonProject(props: ButtonProjectProps) {
    return (
        <button className="btn-project">
            <div className="btn-icon">
                {props.icon}
            </div>
            <div className="btn-text">
                <p>
                    {props.text}
                </p>
            </div>
        </button>
    );
}

export default ButtonProject;