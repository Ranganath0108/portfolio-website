import Navbar from './components/Navbar'; // <-- Import the Navbar
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <Navbar /> 
      <Header />
      <About />
      <Skills />
      <Hobbies />
      <Projects />
      <Footer />
    </>
  )
}

export default App