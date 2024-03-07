import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "../css/about.css";

function About() {
  return (
    <div id="about">
      <div id="about-info">
        <h3>about me.</h3>
        <p>
          I am a rising starter in front-end development. I like crafting solid
          and scalable web pages with great user experiences. When doing my work
          user experience is always the top priority and it is important for a
          developer to understand how the user would use specific tools of the
          website. I want to learn and gain more practical knowledge in this
          field to create the most proficient UI.
        </p>
      </div>
      <div id="skills">
        <div className="skill">
          <FontAwesomeIcon icon={faCode} />
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faHtml5} />
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faCss3Alt} />
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faJs} />
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faReact} />
        </div>
      </div>
    </div>
  );
}
export default About;
