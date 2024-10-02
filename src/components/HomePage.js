// src/components/HomePage.js
import React from 'react';
import './HomePage.css';
import AnimatedText from './AnimatedText';

const HomePage = () => {
  return (
    <section className="home">
      <div className="home-content">
        <img
          src={`${process.env.PUBLIC_URL}/profile.png`} // Use your JPEG file
          alt="Joshua Lee"
          className="profile-photo"
        />
        <h1>Joshua Lee</h1>
        <p>
    CS student at Virginia Tech |{' '}
    <span className="role-switcher">
        <AnimatedText /> 
    </span>
    </p>
    <p>
      A passionate 4th year computer science student at Virginia Tech aspiring to gain professional experience in the software
      development (full stack/backend) and AI/ML fields. Seeking to apply leadership experience and technical skills in Java,
      Python, and C for career-development. 
    </p>
      </div>
    </section>
  );
};

export default HomePage;
