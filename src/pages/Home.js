import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Sundramoorthy Balakrishnan</h2>
        <div className="prompt">
          <p>
            I am a fresh graduate with a passion for building web applications.
          </p>

          <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=new">
            <EmailIcon />
          </a>

          <a target="_blank" href="https://www.linkedin.com/in/sundrabalakrishnan/">
            <LinkedInIcon />
          </a>

          <a target="_blank" href="https://github.com/Sundra11">
            <GitHubIcon />
          </a>

        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, NextJs, HTML, CSS, JavaScript, BootStrap, SASS</span>
          </li>

          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, C++, C#, Python</span>
          </li>

          <li className="item">
            <h2>Others</h2>
            <span>Android Studio, .NET, MySQL, Firebase, MongoDB, Adobe Photoshop</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
