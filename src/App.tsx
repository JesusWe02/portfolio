import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { MainContent } from './Components/MainContent';
import { NavBar } from './Components/NavBar';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';

function App() {
  return (
    <>
      <NavBar />
      <MainContent />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
