import "./App.css";
import { AboutMe } from "./Components/AboutMe/AboutMe";
import { Contact } from "./Components/Contact/Contact";
import { Header } from "./Components/Header/Header";
import { Projects } from "./Components/Projects/Projects";
import { Skills } from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
