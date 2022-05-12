import { ReactNode } from 'react';
import "../style/button-link-project.scss";


interface ButtonLinkProjectProps {
    icon: ReactNode,
    link?: string,
    text: string
}


function ButtonLinkProject(props: ButtonLinkProjectProps) {
    const { icon, link, text } = props;
    return (
        <div>
            {
                link != null ? 
                <a href={link}>
                    <button className="btn-project">
                        <div className="btn-icon">
                            {icon}
                        </div>
                        <div className="btn-text">
                            <p>
                                {text}
                            </p>
                        </div>
                    </button>
                </a> 
                : <div></div>
            }
        </div>  
    );
}

export default ButtonLinkProject;