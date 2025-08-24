import './Projects.css';
import { motion } from 'framer-motion'; // Import Framer Motion

// Animation variants
const cardVariants = {
  offscreen: {
    y: 50, // Start 50px down
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Projects = () => {
  const projects = [
    // ... (keep your project array exactly as it was)
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
            <motion.div
              key={index}
              className="project-card"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }} // Animate when 30% of the card is in view, only once
              variants={cardVariants}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;