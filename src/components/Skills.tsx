import React from 'react';
import './Skills.css';
import { personalInfo } from '../data';
import { SiPython, SiR, SiMysql } from 'react-icons/si';
import { FaChartBar, FaFileExcel, FaChartPie } from 'react-icons/fa';

const Skills: React.FC = () => {
  const getIcon = (skill: string) => {
    switch (skill.toLowerCase()) {
      case 'python': return <SiPython />;
      case 'sql': return <SiMysql />;
      case 'r': return <SiR />;
      case 'tableau': return <FaChartBar />;
      case 'powerbi': return <FaChartPie />;
      case 'excel': return <FaFileExcel />;
      default: return null;
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Kỹ năng chuyên môn</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Công cụ & Ngôn ngữ</h3>
            <div className="tools-list">
              {personalInfo.skills.technical.map((skill, index) => (
                <div key={index} className="tool-card">
                  <span className="tool-icon">{getIcon(skill)}</span>
                  <span className="tool-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Kỹ năng mềm & Ngôn ngữ</h3>
            <div className="soft-skills">
              {personalInfo.skills.soft.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
              {personalInfo.skills.languages.map((lang, index) => (
                <span key={index} className="skill-tag lang-tag">{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
