import profile from "../assets/imgs/profile.svg";
import working from "../assets/imgs/Working.gif";
import "../style/home.scss"

function Home(){
    return (
        <div className="home">
            <img src={profile} alt="Matheus Ferreira" className="profile" />
            <h2>Matheus da Silva Ferreira</h2>
            <p>Student of web development</p>
            <section>
                <div className="about-me">
                    <p>
                        Searching for my first job at development of software.<br/>
                        I build this site to show what I love to do, and to you have a
                        channel to find me.
                    </p>
                    <p>
                        I’m able to learn everything, but now I’m working in
                        open-source projects with Javascript and
                        Typescript.<br/>
                        See my portfolio bellow. 👇
                    </p>
                </div>
                <div className="rafiki-working">
                    <img src={working} alt="" /> <br/>
                    <a href="https://storyset.com/work">Work illustrations by Storyset</a>
                </div>
            </section>
        </div>
    )
}

export default Home;