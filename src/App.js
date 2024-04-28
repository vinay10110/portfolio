import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import About from './pages/About'
import Projects from './pages/Projects';
function App() {
  return (
    <div className="App">
      
      <Navbar />
    <Home />
    <Projects />
    <Contact />
    <About />
    
    </div>
  );
}

export default App;
