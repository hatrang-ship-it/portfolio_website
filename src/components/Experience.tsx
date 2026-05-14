import React from 'react';
import './Experience.css';
import { personalInfo } from '../data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Kinh nghiệm làm việc</h2>
        <div className="timeline">
          {personalInfo.experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">{exp.period}</div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <ul>
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
