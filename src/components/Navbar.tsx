import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">HT.<span>Data</span></div>
        <ul className="nav-links">
          <li><a href="#about">Giới thiệu</a></li>
          <li><a href="#skills">Kỹ năng</a></li>
          <li><a href="#experience">Kinh nghiệm</a></li>
          <li><a href="#projects">Dự án</a></li>
          <li><a href="#contact">Liên hệ</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
