import './Skills.css';

const Skills = () => {
  // Skill data organized by category
  const skillCategories = [
    {
      title: "Programming & Frameworks",
      skills: ["Java (11-17)", "Spring Boot", "Spring Kafka", "Python", "SQL", "RESTful APIs", "OpenAPI/Swagger", "Microservices Architecture"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (ECS, EKS, S3, IAM)", "Terraform (IaC)", "Docker", "Kubernetes (EKS)", "GitLab CI/CD", "Jenkins", "Helm", "Grafana", "Cost Optimization"]
    },
    {
      title: "Databases & Tools",
      skills: ["Oracle DB", "MS SQL Server", "Liquibase", "Kafka", "Auth0", "Jira", "Confluence"]
    },
    {
      title: "Core Competencies",
      skills: ["Cloud-Native Development", "Legacy Modernization", "CI/CD Automation", "DevOps Culture", "Hybrid Architecture", "Event-Driven Systems"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;