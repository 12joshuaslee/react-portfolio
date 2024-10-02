// src/components/Experience.js
import React from 'react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faBookOpen } from '@fortawesome/free-solid-svg-icons';

// Import company logos from the src/assets directory
import vtLogo from '../assets/virginia-tech.png';
import kratosLogo from '../assets/kratos_logo.webp';
import awsLogo from '../assets/aws_logo.webp';
import rinconLogo from '../assets/rincon_logo.png';
import humeLogo from '../assets/hume_logo.png';




const experiences = [
  {
    title: 'Space Federal Product Engineering Software Intern',
    company: 'Kratos Defense and Security Solutions',
    location: 'Chantilly, VA',
    dates: 'May 2024 – Present',
    description: [
      'Developed a Python script using REST API endpoints and Postman API to automate demo configurations for Kratos OpenSpace Platform.',
      'Utilized Docker, Kubernetes, and Rancher for efficient container management and orchestration.',
      'Leveraged AWS services to enhance deployment processes and support platform configuration.'
    ],
    logo: kratosLogo,
    icon: faLaptopCode,
  },
  {
    title: 'Machine Learning Research Fellow',
    company: 'AWS',
    location: 'Blacksburg, VA',
    dates: 'Sep 2023 – Present',
    description: [
      'Create Convolutional Neural Networks in PyTorch to perform multi-class classification for improved RF spectrum sensing.',
      'Use cloud services from aws (Sagemaker, S3, EC2) to load and train data used in neural networks more effectively.',
    ],
    logo: awsLogo,
    icon: faBookOpen,
  },
  {
    title: 'Teaching Assistant',
    company: 'Computer Science Department at Virginia Tech',
    location: 'Blacksburg, VA',
    dates: 'Jan 2024 – May 2024',
    description: [
      'Conducted office hours for 8 hours a week to reinforce key concepts such as object-oriented design, algorithm analysis and complexity analysis.',
      'Lead problem solving for students, and facilitate group discussions to promote collaborative learning.',
      'Coded to demonstrate abstract and concrete implementations of data structures and to design algorithms.'
    ],
    logo: vtLogo,
    icon: faBookOpen,
  },
  {
    title: 'Software Engineering Intern',
    company: 'Rincon Research Corporation',
    location: 'Chantilly, VA',
    dates: 'June 2023 – Aug 2023',
    description: [
      'Analyzed the Ionospheric effect on high frequency (HF) propagation through carrier recovery to provide research and knowledge of its behavior in non-polar locations',
      'Created a python application to sort through 200,000+ .wav files and output Matplotlib plots of the carrier phase and magnitude to study and understand the variance between the synthetic and received waveforms'
    ],
    logo: rinconLogo,
    icon: faLaptopCode,
  },
  {
    title: 'Undergraduate Researcher',
    company: 'Hume Center for National Security and Technology at Virginia Tech ',
    location: 'Blacksburg, VA',
    dates: 'Jan 2023 – May 2023',
    description: [
      'Conducted research to develop a simulation environment (RFRL Gym) with OpenAI Gym to address two cognitive radio applications, specifically dynamic spectrum access and jamming',
      'Trained and tested machine learning (Q-learning/Epsilon Greedy) algorithms using MushroomRL to build an RL agent',
      'Open-sourced this codebase to allow researchers to utilize RFRL Gym, providing a platform for third-party testing of RL algorithms and ultimately contributing to the advancement of RL research'
    ],
    logo: humeLogo,
    icon: faLaptopCode,
  },
  
];

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="icon-container">
              <div className="icon-circle">
                <FontAwesomeIcon icon={exp.icon} />
              </div>
            </div>
            <div className="content">
              <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
              <h3>{exp.title} - {exp.company}</h3>
              <p className="dates">{exp.dates} | {exp.location}</p>
              <ul>
                {exp.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
