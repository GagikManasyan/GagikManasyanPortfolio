import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../css/project.css";

function Project({ img, link, git }) {
  return (
    <div className="project">
      <img src={img} alt="" />
      <div className="links">
        <a href={link}>Visit</a>
        <a href={git}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
}
export default Project;
