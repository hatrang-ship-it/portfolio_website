import React from 'react';
import './Footer.css';
import { personalInfo } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p>Built with React & Passion for Data.</p>
      </div>
    </footer>
  );
};

export default Footer;
