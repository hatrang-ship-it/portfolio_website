import React from 'react';
import './About.css';
import { personalInfo } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Giới thiệu bản thân</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>{personalInfo.summary}</p>
            <div className="education">
              <h3>Học vấn</h3>
              <p><strong>{personalInfo.education.school}</strong></p>
              <p>{personalInfo.education.major} ({personalInfo.education.period})</p>
              <p>GPA tích lũy: <span className="highlight">{personalInfo.education.gpa}</span></p>
            </div>
          </div>
          <div className="about-info">
            <div className="info-item">
              <strong>Địa chỉ:</strong> {personalInfo.address}
            </div>
            <div className="info-item">
              <strong>Ngành học:</strong> Data Analytics in Finance
            </div>
            <div className="info-item">
              <strong>Trạng thái:</strong> Tìm kiếm cơ hội thực tập/làm việc
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
