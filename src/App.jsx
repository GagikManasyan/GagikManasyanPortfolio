import Header from "./header.jsx";
import Home from "./home.jsx";
import About from "./about.jsx";
import Projects from "./projects.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./css/reset.css";
import "./css/fonts.css";
import "./css/App.css";

function Contacts() {
  return (
    <ul id="contacts">
      <li>
        <a href="tel:+37496400186">
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </li>
      <li>
        <a href="mailto:gagik.manasyan0012@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
    </ul>
  );
}
function App() {
  return (
    <div id="app">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
