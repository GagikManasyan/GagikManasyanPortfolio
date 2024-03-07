import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header.jsx";
import Home from "./routes/home.jsx";
import About from "./routes/about.jsx";
import Projects from "./routes/projects.jsx";
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
    <Router>
      <div id="app">
        <Header />
        <Routes>
          <Route key="home" path="/" element={<Home />} />
          <Route key="about" path="/about" element={<About />} />
          <Route key="projects" path="/projects" element={<Projects />} />
        </Routes>
        <Contacts />
      </div>
    </Router>
  );
}

export default App;
