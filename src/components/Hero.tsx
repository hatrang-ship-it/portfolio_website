import React from 'react';
import './Hero.css';
import { personalInfo } from '../data';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Chào bạn, tôi là <br /><span>{personalInfo.name}</span></h1>
          <h3>{personalInfo.title}</h3>
          <p>Chuyên sâu về phân tích dữ liệu kinh doanh và tài chính. Luôn hướng tới việc chuyển hóa dữ liệu thành giá trị thực tiễn.</p>
          <div className="hero-btns">
            <a href="#projects" className="btn">Xem dự án</a>
            <a href="#contact" className="btn btn-outline">Liên hệ</a>
          </div>
        </div>
        <div className="hero-image">
          {/* Placeholder for professional photo */}
          <div className="image-circle">
            <span className="initials">HT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
