// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'React-Portfolio',
    description: 'A dynamic portfolio built using React, JavaScript, HTML, and CSS, showcasing my projects and skills in front-end development and design.',
    technologies: ['React', 'Javascript', 'HTML', 'CSS'],
    github: '',
    demo: '', // Add live demo link if available
    image: '/react-portfolio/assets/portfolio.png', // Add image path or URL
  },
  // Add more projects here
  {
    title: 'ML Sales Forecasting',
    description: 'An ML project that uses Walmart retail data to accurately forecast sales.',
    technologies: ['Python', 'SKLearn'],
    github: 'https://github.com/12joshuaslee/MLSalesForecast',
    demo: '', // Add live demo link if available
    image: '/react-portfolio/assets/ML_SF.png', // Add image path or URL
  },

];

const Projects = () => {
  return (
    <div className="projects-section" style={{ padding: '3rem' }}>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" /> {/* Added image */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, techIndex) => (
                <span className="tech-badge" key={techIndex}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
              {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
