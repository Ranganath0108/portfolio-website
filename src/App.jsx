import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies'; // <-- Import Hobbies
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Hobbies /> {/* <-- Add it here */}
      <Projects />
      <Footer />
    </>
  )
}

export default App