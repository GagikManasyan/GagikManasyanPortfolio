import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./css/header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="https://github.com/GagikManasyan">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/gagik-manasyan">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
