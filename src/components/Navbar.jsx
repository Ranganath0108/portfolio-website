import './Navbar.css';

const Navbar = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <span className="nav-logo">R.Y.S</span>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          </li>
          <li className="nav-item">
            <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
          </li>
          <li className="nav-item">
            <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#hobbies" onClick={() => scrollToSection('hobbies')}>Beyond Code</a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;