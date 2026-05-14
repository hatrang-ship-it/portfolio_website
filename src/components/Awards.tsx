import React from 'react';
import './Awards.css';
import { personalInfo } from '../data';
import { FaAward, FaCertificate } from 'react-icons/fa';

const Awards: React.FC = () => {
  return (
    <section className="awards">
      <div className="container">
        <h2 className="section-title">Chứng chỉ & Giải thưởng</h2>
        <div className="awards-list">
          {personalInfo.awards.map((award, index) => (
            <div key={index} className="award-item">
              <span className="award-icon">
                {award.toLowerCase().includes('chứng chỉ') ? <FaCertificate /> : <FaAward />}
              </span>
              <p>{award}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
