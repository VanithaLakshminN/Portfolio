import Navbar from './components/Navbar';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-darkBg text-slate-100">
      <Navbar />
      <main className="px-6 md:px-24">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
export default App;