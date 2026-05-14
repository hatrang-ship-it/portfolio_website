import React, { useState } from 'react';
import './Contact.css';
import { personalInfo } from '../data';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Đã thay 'YOUR_FORMSPREE_ID' bằng mã ID của bạn
    const FORMSPREE_ID = "xwvyzowa"; 

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("Cảm ơn bạn! Tin nhắn đã được gửi thành công.");
        form.reset();
      } else {
        setStatus("Rất tiếc, đã có lỗi xảy ra. Vui lòng thử lại.");
      }
    } catch (error) {
      setStatus("Rất tiếc, đã có lỗi xảy ra. Vui lòng thử lại.");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Liên hệ với tôi</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Thông tin liên lạc</h3>
            <div className="contact-method">
              <FaPhone className="icon" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="contact-method">
              <FaEnvelope className="icon" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="contact-method">
              <FaMapMarkerAlt className="icon" />
              <span>{personalInfo.address}</span>
            </div>
            <div className="social-links">
              <a href="#" className="social-icon"><FaLinkedin /></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Họ và tên" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Tin nhắn của bạn" rows={5} required></textarea>
            <button type="submit" className="btn">Gửi tin nhắn</button>
            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
