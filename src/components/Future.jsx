import './Future.css';

const Future = () => {
  return (
    <section id="future" className="future-section">
      <div className="future-container">
        <h2>Architecting the Future</h2>
        <p className="future-intro">My vision is to evolve from building systems to designing intelligent, self-optimizing platforms. I am focused on synthesizing my expertise in Java, Cloud, DevOps, and AI to solve next-generation challenges.</p>
        <div className="future-grid">
          <div className="future-item">
            <h3>⚡ Cloud-Native Java Performance</h3>
            <p>Pioneering the use of GraalVM and deep JVM tuning to build ultra-efficient, serverless-ready Java applications that minimize cloud resource consumption and cost.</p>
          </div>
          <div className="future-item">
            <h3>🤖 AI-Enhanced Developer Platforms</h3>
            <p>Building self-service internal platforms infused with AI agents for automated code review, predictive CI/CD, and real-time cost optimization.</p>
          </div>
          <div className="future-item">
            <h3>🧠 Event-Driven AI Foundations</h3>
            <p>Architecting event-driven data meshes with Kafka to create a real-time, scalable foundation for machine learning and intelligent application features.</p>
          </div>
          {/* NEW GOALS ADDED BELOW */}
          <div className="future-item">
            <h3>🔀 GitOps for Application Lifecycle</h3>
            <p>Championing GitOps methodologies to manage everything—code, infrastructure, config, and deployments—through Git for ultimate reliability and automation.</p>
          </div>
          <div className="future-item">
            <h3>🚀 Serverless Java Architectures</h3>
            <p>Solving the cold-start challenge and architecting entire ecosystems around event-driven serverless functions to maximize scalability and cost-efficiency.</p>
          </div>
          <div className="future-item">
            <h3>📊 AI-Powered Observability</h3>
            <p>Building observability platforms that use ML to predict failures and performance degradation in microservices before they impact users.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;