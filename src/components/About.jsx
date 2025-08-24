import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>Driving Modernization & Efficiency in the Cloud</h2>
        
        <div className="about-grid">
          <div className="about-item">
            <h3>🔄 Modernization</h3>
            <p>Specializing in the end-to-end modernization of legacy fintech systems into scalable, <strong>cloud-native architectures</strong> using microservices, Kubernetes, and DevOps practices.</p>
          </div>

          <div className="about-item">
            <h3>⚡ DevOps & Automation</h3>
            <p>I build and automate robust <strong>CI/CD pipelines</strong> that slash infrastructure costs by 70% and reduce build times from hours to minutes, enabling faster and more reliable releases.</p>
          </div>

          <div className="about-item">
            <h3>🛠️ Core Engineering</h3>
            <p>My work is powered by deep expertise in the <strong>Java ecosystem (11-17)</strong> and event-driven design with <strong>Kafka</strong>, ensuring strong foundations for any system I build or improve.</p>
          </div>
        </div>

        <p className="about-cta">
          I'm passionate about building platforms that empower engineers to do their best work.
        </p>
      </div>
    </section>
  );
};

export default About;