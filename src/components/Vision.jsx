import React from 'react';
import './Vision.css';
const Vision = () => {
  return (
    <div className="vision-wrapper">
     

      <div className="vision-container">
        {/* Floating Decorative Dots */}
        <div className="floating-dots">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
          <div className="dot dot-4"></div>
        </div>

        <div className="vision-content-wrapper">
          {/* Text Section */}
          <div className="vision-text-section">
            <div className="vision-badge">
              <i className="far fa-helmet-safety"></i>
              <span>Our Vision</span>
            </div>
            
            <h2 className="vision-title">
              Leading The Future
              <span>Mountain Falcon Company</span>
            </h2>

            <p className="vision-description">
             MOUNTAIN FALCON COMPANY boasts a highly skilled team of professional engineers and seasoned craftsmen sourced from India, the Philippines, Pakistan, and Nepal. Fully equipped with its own state-of-the-art machinery and tools, MOUNTAIN FALCON COMPANY ensures seamless on-site execution.

            </p>

            <a href="/contact" className="vision-cta-btn">
              Learn More
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          {/* Image Section */}
          <div className="vision-image-section">
            <div className="vision-image-decoration"></div>
            <div className="vision-image-container">
              <img 
                src="/assets/img/223.webp" 
                alt="Mountain Falcon Company Vision"
              />
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;