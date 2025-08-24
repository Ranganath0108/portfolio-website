import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "CI/CD Pipeline Modernization",
      description: "Migrated CI/CD from Jenkins to GitLab CI for a 2M+ LOC monolith. Introduced parallelized Gradle builds and build caching, enabling self-service deployments.",
      technologies: ["GitLab CI", "Gradle", "Docker", "AWS", "Kubernetes"],
      result: "Reduced infrastructure costs by 80% and build time from 2 hours to 26 minutes."
    },
    {
      title: "Java 11 to Java 17 Migration",
      description: "Led the zero-downtime upgrade of a 2M+ LOC monolith. Refactored legacy code using modern Java features like records and text blocks.",
      technologies: ["Java", "Spring Boot", "Maven", "Docker"],
      result: "Achieved 20% faster application startup time and improved garbage collection performance."
    },
    {
      title: "Hybrid Architecture Integration",
      description: "Designed and implemented a hybrid architecture to enable the coexistence of the legacy monolith with new microservices, using Kafka for event-driven communication.",
      technologies: ["Kafka", "Microservices", "AWS EKS", "Event-Driven Design"],
      result: "Reduced load on the legacy monolith by 40%, enabling incremental modernization."
    },
    {
      title: "AI-Powered Job Search Automation",
      description: "A personal project to automate the job search process. Built workflows to scrape, filter, and summarize job postings, and generate tailored cover letters using AI.",
      technologies: ["n8n", "Gemini API", "Python", "Shell Scripting", "HTTP APIs"],
      result: "Dramatically increased efficiency in job application process; demonstrates passion for automation."
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Key Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-pill">{tech}</span>
                ))}
              </div>
              <div className="project-result">
                <strong>Result:</strong> {project.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;