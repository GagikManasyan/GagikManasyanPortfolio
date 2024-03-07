import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./css/header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul id="web-nav">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="https://github.com/GagikManasyan">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </li>
          <li>
            <Link to="https://linkedin.com/in/gagik-manasyan">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
