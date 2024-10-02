// src/components/Skills.js
import React from 'react';
import './Skills.css';

const skillsData = {
  Languages: [
    { name: 'Python', logo: `${process.env.PUBLIC_URL}/logos/python.png` },
    { name: 'Java', logo: `${process.env.PUBLIC_URL}/logos/java.png` },
    { name: 'JavaScript', logo: `${process.env.PUBLIC_URL}/logos/javascript.png` },
    { name: 'C', logo: `${process.env.PUBLIC_URL}/logos/c_logo.png` },
    { name: 'SQL', logo: `${process.env.PUBLIC_URL}/logos/sql.png` },
    { name: 'HTML', logo: `${process.env.PUBLIC_URL}/logos/html.png` },
    { name: 'CSS', logo: `${process.env.PUBLIC_URL}/logos/css.png` },
  ],
  Frameworks: [
    { name: 'ReactJS', logo: `${process.env.PUBLIC_URL}/logos/react.png` },
    { name: 'TensorFlow', logo: `${process.env.PUBLIC_URL}/logos/tensorflow.png` },
    { name: 'PyTorch', logo: `${process.env.PUBLIC_URL}/logos/pytorch.png` },
  ],
  Tools: [
    { name: 'VS Code', logo: `${process.env.PUBLIC_URL}/logos/vscode.png` },
    { name: 'AWS', logo: `${process.env.PUBLIC_URL}/logos/aws.png` },
    { name: 'Docker', logo: `${process.env.PUBLIC_URL}/logos/docker.png` },
    { name: 'Kubernetes', logo: `${process.env.PUBLIC_URL}/logos/kubernetes_logo.png` },
    { name: 'Linux', logo: `${process.env.PUBLIC_URL}/logos/linux_logo.jpg` },
    { name: 'Git', logo: `${process.env.PUBLIC_URL}/logos/git.png` },
    { name: 'Jupyter Notebook', logo: `${process.env.PUBLIC_URL}/logos/jupyter.png` },
    { name: 'Postman', logo: `${process.env.PUBLIC_URL}/logos/postman.png` },
  ],
};

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>Technologies</h2>

      {Object.keys(skillsData).map((category, index) => (
        <div key={index} className="skills-category">
          <h3>{category}</h3>
          <div className="skills-grid">
            {skillsData[category].map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-item">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="skill-logo"
                  title={skill.name}  // Tooltip to show the skill name
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
