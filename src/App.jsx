import Navbar from './components/Navbar'; // <-- Import the Navbar
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Future from './components/Future';
import Footer from './components/Footer';
import './App.css'
import { i } from 'framer-motion/client';

function App() {
  return (
    <>
      <Navbar /> 
      <Header />
      <About />
      <Skills />
      <Projects />
      <Future /> 
      <Hobbies />
      <Contact /> 
      <Footer />
    </>
  )
}

export default App