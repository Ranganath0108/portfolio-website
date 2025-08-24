import './Header.css';

const Header = () => {
  return (
    <header className="portfolio-header">
      <div className="header-content">
        <h1>Ranganathaswamy Y S</h1>
        <h2>Cloud-Native Java Engineer | DevOps-Savvy | Microservices & Automation</h2>
        <p>Modernizing large-scale fintech systems and driving cloud-native transformation.</p>

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