import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p>I'm always open to discussing new opportunities, innovative projects, or potential collaborations.</p>
        
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:ranganathswamy.ys@gmail.com">ranganathswamy.ys@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <a href="tel:+919480282010">+91 9480282010</a>
          </div>
        </div>

        <div className="contact-links">
          <a href="https://linkedin.com/in/ranganathaswamys" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/Ranganath0108" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;