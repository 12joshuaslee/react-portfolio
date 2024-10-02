import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import virginiaTechLogo from '../assets/virginia-tech.png'; // Import Virginia Tech logo
import './Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="timeline">
        {/* Virginia Tech */}
        <div className="timeline-item">
          <div className="icon-container">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faUniversity} />
            </div>
          </div>
          <div className="content">
            <img src={virginiaTechLogo} alt="Virginia Tech Logo" className="education-logo" />
            <h3>Virginia Polytechnic Institute and State University</h3>
            <p className="location">Blacksburg, VA</p>
            <p className="GPA">GPA: 3.95</p>
            <p className="dates">Aug 2021 – May 2025</p>
            <p className="degree">Computer Science</p>
            <ul>
              <li>Intermediate Data Structures and Algorithms</li>
              <li>Information Visualization</li>
              <li>Machine Learning I & II</li>
              <li>Introduction to Urban Computing</li>
              <li>Introduction to Deep Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
