import './App.css'
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App
