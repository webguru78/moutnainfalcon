import React, { useEffect, useRef } from 'react';
import './HsePolicy.css'; // Import the CSS file for styling
const HsePolicy = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="quality-policy-section py-5 position-relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="floating-elements">
          {/* Large Geometric Shapes */}
          <div className="float-shape shape-circle-1"></div>
          <div className="float-shape shape-square-1"></div>
          <div className="float-shape shape-circle-2"></div>
          <div className="float-shape shape-diamond-1"></div>
          <div className="float-shape shape-circle-3"></div>
          
          {/* Small Particles */}
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          
          {/* Gradient Orbs */}
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          
          {/* Animated Rings */}
          <div className="animated-ring ring-1"></div>
          <div className="animated-ring ring-2"></div>
        </div>

        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left Image Section */}
            <div className="col-lg-6 scroll-animate">
              <div className="image-container position-relative">
                {/* Decorative Frame */}
                <div className="image-glow"></div>
                
                <div className="image-wrapper position-relative">
                  {/* Corner Decorations */}
                  <div className="corner-deco corner-tl"></div>
                  <div className="corner-deco corner-br"></div>
                  
                  <div className="img-holder position-relative overflow-hidden rounded-3 shadow-lg">
                    <img
                      src="assets/img/policy.jpg"
                      alt="Quality Policy"
                      className="img-fluid w-100 quality-img"
                    />
                    <div className="img-overlay"></div>
                    <div className="corner-accent"></div>
                  </div>

                  {/* Floating Badge */}
                  <div className="floating-badge position-absolute bg-white rounded-3 shadow-lg">
                    <div className="d-flex align-items-center gap-3">
                      <div className="badge-icon d-flex align-items-center justify-content-center">
                        <i className="fas fa-award"></i>
                      </div>
                      <div>
                        <p className="mb-0 small fw-semibold text-muted">Industry Standard</p>
                        <p className="mb-0 fw-bold">Excellence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="col-lg-6 scroll-animate">
              {/* Section Label */}
              <div className="section-label d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill mb-4">
                <span className="pulse-dot"></span>
                <span className="small fw-semibold text-uppercase ls-wide">Our Commitment</span>
              </div>

              {/* Title */}
              <h2 className="section-title display-4 fw-bold mb-4">
                HSE Policy
               
              </h2>

              {/* Description */}
              <p className="lead  mb-3 lh-lg">
               At MOUNTAIN FALCON COMPANY, Health, Safety, and Environment (HSE) are core pillars of our operational philosophy. Our HSE Policy represents our firm dedication to ensuring a safe, healthy, and environmentally responsible workplace for our employees, subcontractors, and every stakeholder connected to our projects.

We strictly adhere to both local and international safety standards, continuously promoting a culture where safety awareness, responsibility, and preventive action are prioritized. 
              </p>

              <p className="text-muted mb-4 lh-lg">
              
              </p>

              {/* Stats Grid */}
             

              {/* Highlight Box */}
           
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default HsePolicy;