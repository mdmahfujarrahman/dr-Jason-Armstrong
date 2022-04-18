import React from "react";
import profilePhoto from "../../../images/profile.jpg";
import "./About.css";

const About = () => {
    return (
        <div
            className="my-40 flex flex-col md:flex-row justify-center items-center"
            style={{
                height: "85vh",
            }}
        >
            <div className="heroImageContainer">
                <img src={profilePhoto} alt="A picture of Alex Calia." />
            </div>
            <div className="heroDescription">
                <p className="greeting">HI THERE! I'M</p>
                <h1>
                    <span>Md Mahfujar</span> Rahman
                </h1>
                <p className="smallBio">
                    My goal is to be a <span>Good Quality Web Developer</span>
                    in the next year. Also aim to create interactive
                    applications and experiences on the web. I will do my best
                    to complete this goal.
                </p>
                <div className="socialsResume">
                    <a
                        className="resumeLink"
                        href="https://www.linkedin.com/in/mahfuj-ahmed/"
                        alt="mahfuj ahmed"
                        target="_blank"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
