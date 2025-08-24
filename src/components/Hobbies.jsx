import './Hobbies.css';
import { FaRobot, FaBook, FaCamera, FaPlane, FaCode } from 'react-icons/fa'; // Import specific icons

const Hobbies = () => {
  const hobbies = [
    { name: "Automation Scripting", icon: <FaCode /> },
    { name: "Exploring AI Tools", icon: <FaRobot /> },
    { name: "Reading Tech Blogs", icon: <FaBook /> },
    { name: "Photography", icon: <FaCamera /> },
    { name: "Travelling", icon: <FaPlane /> }
  ];

  return (
    <section id="hobbies" className="hobbies-section">
      <div className="hobbies-container">
        <h2>Beyond Code</h2>
        <p>A glimpse into what I enjoy when I'm not architecting systems or optimizing pipelines.</p>
        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <div key={index} className="hobby-item">
              <div className="hobby-icon-wrapper">
                {hobby.icon}
              </div>
              <span className="hobby-name">{hobby.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;