import './Navbar.css';
import navAvatar from '../assets/nav-avatar.jpg'; 

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
        {/* Replace text logo with Avatar */}
        <a href="#home" onClick={() => scrollToSection('home')} className="nav-logo">
          <img src={navAvatar} alt="Home - Ranganathaswamy Y S" className="nav-avatar" />
        </a>
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
            <a href="#future" onClick={() => scrollToSection('future')}>Future</a>
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