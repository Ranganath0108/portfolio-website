import './Header.css';
import profilePhoto from '../assets/profile-photo.jpeg';

const Header = () => {
  const taglines = [
    "Modernizing large-scale fintech systems.",
    "Driving cloud-native transformation.",
    "Reducing infrastructure costs by 80%."
  ];

  return (
    <header id="home" className="portfolio-header">
      <div className="header-content">
        {/* Profile Photo Container */}
        <div className="profile-img-container">
          <img 
            src={profilePhoto} 
            alt="Ranganathaswamy Y S - Senior Software Engineer" 
            className="profile-img"
          />
        </div>
        {/* Text Content */}
        <h1>Ranganathaswamy Y S</h1>
        <h2>Cloud-Native Java Engineer | DevOps-Savvy | Microservices & Automation</h2>
        <p>{taglines[0]}</p>

        <div className="contact-info">
          <a href="mailto:ranganathswamy.ys@gmail.com">ranganathswamy.ys@gmail.com</a>
          <span> | </span>
          <a href="tel:+919480282010">+91 9480282010</a>
          <span> | </span>
          <span>Bangalore, India</span>
        </div>

        <div className="header-links">
          <a href="https://linkedin.com/in/ranganathaswamys" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Ranganath0108" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </header>
  );
};

export default Header;