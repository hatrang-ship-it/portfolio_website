import React from 'react';
import './Projects.css';
import { personalInfo } from '../data';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Dự án tiêu biểu</h2>
        <div className="projects-grid">
          {personalInfo.projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-tools">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-footer">
                <button className="btn-sm">Chi tiết dự án</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
