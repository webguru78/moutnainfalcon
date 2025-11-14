import React, { useEffect, useRef, useState } from "react";

const ContactForm = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = () => {
    alert("Thank you for contacting MOUNTAIN FALCON COMPANY! We'll get back to you soon.");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const FloatingElement = ({ size, top, left, delay, duration, color, shape }) => (
    <div
      style={{
        ...styles.floatingBase,
        width: size,
        height: size,
        top,
        left,
        animation: `float${shape} ${duration}s ease-in-out infinite ${delay}s`,
        background: color === 'orange' 
          ? 'linear-gradient(135deg, rgba(246, 88, 1, 0.08), rgba(246, 88, 1, 0.02))'
          : 'linear-gradient(135deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.01))',
        borderRadius: shape === 'circle' ? '50%' : '30%',
        border: `1px solid ${color === 'orange' ? 'rgba(246, 88, 1, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
      }}
    />
  );

  const AnimatedDot = ({ size, top, left, delay }) => (
    <div
      style={{
        ...styles.dot,
        width: size,
        height: size,
        top,
        left,
        animation: `pulse ${3 + delay}s ease-in-out infinite ${delay}s`,
      }}
    />
  );

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes floatcircle {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
          25% { 
            transform: translate(20px, -20px) rotate(90deg) scale(1.05);
            opacity: 0.8;
          }
          50% { 
            transform: translate(0, -40px) rotate(180deg) scale(0.95);
            opacity: 1;
          }
          75% { 
            transform: translate(-20px, -20px) rotate(270deg) scale(1.05);
            opacity: 0.8;
          }
        }
        
        @keyframes floatsquare {
          0%, 100% { 
            transform: translate(0, 0) rotate(45deg) scale(1);
          }
          33% { 
            transform: translate(-25px, 25px) rotate(135deg) scale(1.1);
          }
          66% { 
            transform: translate(25px, -25px) rotate(225deg) scale(0.9);
          }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.4;
          }
          50% { 
            transform: scale(1.5);
            opacity: 0.1;
          }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .input-field {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .input-field:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(246, 88, 1, 0.15);
        }

        .stat-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
        }

        .submit-btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
        }
        
        .submit-btn:hover .arrow-icon {
          transform: translateX(5px);
        }
        
        .submit-btn:active {
          transform: translateY(-1px);
        }

        .contact-item {
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          transform: translateX(10px);
        }

        .icon-box {
          transition: all 0.3s ease;
        }

        .contact-item:hover .icon-box {
          background: #f65801;
          transform: rotate(360deg);
        }

        .contact-item:hover .icon-box svg {
          color: white;
        }
        
        @media (max-width: 1024px) {
          .row-grid { 
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .main-heading { 
            font-size: 2.5rem !important;
            text-align: center;
          }
          .accent-line {
            margin: 0 auto !important;
          }
          .description {
            text-align: center;
          }
        }
        
        @media (max-width: 768px) {
          .form-container-box { 
            padding: 35px 25px !important;
          }
          .form-grid-container { 
            grid-template-columns: 1fr !important;
          }
          .stats-grid-container { 
            grid-template-columns: 1fr !important;
          }
          .main-heading {
            font-size: 2rem !important;
          }
        }
      `}</style>

      {/* Floating Elements */}
      <FloatingElement size="350px" top="5%" left="5%" delay={0} duration={12} color="orange" shape="circle" />
      <FloatingElement size="250px" top="15%" left="85%" delay={2} duration={15} color="black" shape="square" />
      <FloatingElement size="180px" top="70%" left="10%" delay={4} duration={10} color="black" shape="circle" />
      <FloatingElement size="220px" top="60%" left="80%" delay={1} duration={14} color="orange" shape="square" />
      <FloatingElement size="150px" top="40%" left="50%" delay={3} duration={11} color="black" shape="circle" />
      
      {/* Animated Dots */}
      <AnimatedDot size="8px" top="20%" left="30%" delay={0} />
      <AnimatedDot size="6px" top="80%" left="40%" delay={1} />
      <AnimatedDot size="10px" top="25%" left="70%" delay={0.5} />
      <AnimatedDot size="7px" top="65%" left="60%" delay={1.5} />
      <AnimatedDot size="9px" top="45%" left="20%" delay={0.8} />

      {/* Gradient Overlay following mouse */}
      <div
        style={{
          ...styles.gradientOverlay,
          background: `radial-gradient(circle 800px at ${mousePosition.x}% ${mousePosition.y}%, rgba(246, 88, 1, 0.06) 0%, transparent 60%)`,
        }}
      />

      <div style={styles.content}>
        <div style={styles.row} className="row-grid">
          {/* Left Side - Company Info */}
          <div style={styles.leftColumn}>
            {/* Main Heading */}
            <div style={styles.headingSection}>
              <h1 style={styles.mainHeading} className="main-heading">
                Let's Build
                <span style={styles.accentText}> Something Great</span>
              </h1>
              <div style={styles.accentLine} className="accent-line" />
            </div>

            {/* Company Description */}
            <p style={styles.description} className="description">
              At <strong style={styles.brandName}>MOUNTAIN FALCON COMPANY</strong>, we transform 
              visions into reality. With expertise in quality, innovation, and client satisfaction, 
              we're your trusted partner in building extraordinary spaces.
            </p>

            {/* Stats Cards */}
          
            {/* Contact Information */}
            <div style={styles.contactInfo}>
              <div className="contact-item" style={{...styles.contactItem, animationDelay: '0.8s'}}>
                <div className="icon-box" style={styles.iconBox}>
                  <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div style={styles.contactLabel}>Location</div>
                  <div style={styles.contactValue}>Dubai, United Arab Emirates</div>
                </div>
              </div>

              <div className="contact-item" style={{...styles.contactItem, animationDelay: '1s'}}>
                <div className="icon-box" style={styles.iconBox}>
                  <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div style={styles.contactLabel}>Phone</div>
                  <div style={styles.contactValue}>+971 50 123 4567</div>
                </div>
              </div>

              <div className="contact-item" style={{...styles.contactItem, animationDelay: '1.2s'}}>
                <div className="icon-box" style={styles.iconBox}>
                  <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div style={styles.contactLabel}>Email</div>
                  <div style={styles.contactValue}>info@mountainfalcon.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div style={styles.rightColumn}>
            <div style={styles.formContainer} className="form-container-box">
              <div style={styles.formHeader}>
                <h2 style={styles.formTitle}>Get In Touch</h2>
                <div style={styles.formDivider} />
                <p style={styles.formSubtitle}>Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              <div>
                <div style={styles.formGrid} className="form-grid-container">
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="input-field"
                      style={{
                        ...styles.input,
                        borderColor: focusedInput === 'name' ? '#f65801' : '#e5e7eb',
                      }}
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput('name')}
                      onBlur={() => setFocusedInput(null)}
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className="input-field"
                      style={{
                        ...styles.input,
                        borderColor: focusedInput === 'email' ? '#f65801' : '#e5e7eb',
                      }}
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput('email')}
                      onBlur={() => setFocusedInput(null)}
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      className="input-field"
                      style={{
                        ...styles.input,
                        borderColor: focusedInput === 'phone' ? '#f65801' : '#e5e7eb',
                      }}
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput('phone')}
                      onBlur={() => setFocusedInput(null)}
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      className="input-field"
                      style={{
                        ...styles.input,
                        borderColor: focusedInput === 'subject' ? '#f65801' : '#e5e7eb',
                      }}
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput('subject')}
                      onBlur={() => setFocusedInput(null)}
                    />
                  </div>

                  <div style={{ ...styles.inputGroup, gridColumn: '1 / -1' }}>
                    <label style={styles.label}>Message *</label>
                    <textarea
                      name="message"
                      className="input-field"
                      style={{
                        ...styles.input,
                        ...styles.textarea,
                        borderColor: focusedInput === 'message' ? '#f65801' : '#e5e7eb',
                      }}
                      rows="5"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput('message')}
                      onBlur={() => setFocusedInput(null)}
                    />
                  </div>
                </div>

                <button onClick={handleSubmit} style={styles.submitButton} className="submit-btn">
                  <span style={styles.buttonText}>Send Message</span>
                  <svg className="arrow-icon" style={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "#ffffff",
    position: "relative",
    overflow: "hidden",
    padding: "80px 20px",
  },
  floatingBase: {
    position: "absolute",
    pointerEvents: "none",
    zIndex: 1,
    backdropFilter: "blur(2px)",
  },
  dot: {
    position: "absolute",
    borderRadius: "50%",
    background: "#f65801",
    pointerEvents: "none",
    zIndex: 1,
  },
  gradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
    transition: "background 0.3s ease",
    zIndex: 1,
  },
  content: {
    maxWidth: "1400px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "80px",
    alignItems: "center",
  },
  leftColumn: {
    color: "#0a0a0a",
    animation: "slideUp 0.8s ease-out",
  },
  headingSection: {
    marginBottom: "30px",
  },
  mainHeading: {
    fontSize: "4rem",
    fontWeight: "700",
    lineHeight: "1.1",
    marginBottom: "20px",
    letterSpacing: "-0.03em",
    color: "#0a0a0a",
  },
  accentText: {
    color: "#0A2155",
    display: "block",
  },
  accentLine: {
    width: "100px",
    height: "5px",
    background: "#0A2155",
    borderRadius: "3px",
  },
  description: {
    fontSize: "2.1rem !important",
    lineHeight: "1.8",
    color: "black",
    marginBottom: "50px",
  },
  brandName: {
    color: "#0a0a0a",
    fontWeight: "800",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginBottom: "60px",
  },
  statCard: {
    background: "#ffffff",
    border: "2px solid #f0f0f0",
    borderRadius: "20px",
    padding: "30px 20px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
    animation: "slideUp 0.8s ease-out both",
  },
  statIcon: {
    fontSize: "2rem",
    marginBottom: "12px",
  },
  statNumber: {
    fontSize: "2.2rem",
    fontWeight: "900",
    color: "#f65801",
    marginBottom: "8px",
  },
  statLabel: {
    fontSize: "0.9rem",
    color: "#6b7280",
    fontWeight: "600",
  },
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    animation: "slideUp 0.8s ease-out both",
  },
  iconBox: {
    width: "60px",
    height: "60px",
    background: "#f9fafb",
    border: "2px solid #f0f0f0",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  icon: {
    width: "48px",
    height: "28px",
    color: "#0a0a0a",
  },
  contactLabel: {
    fontSize: "1.4rem",
    color: "black",
    marginBottom: "6px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  contactValue: {
    fontSize: "1.05rem",
    fontWeight: "700",
    color: "#0a0a0a",
  },
  rightColumn: {
    display: "flex",
    justifyContent: "center",
    animation: "slideUp 0.8s ease-out 0.2s both",
  },
  formContainer: {
    background: "#ffffff",
    borderRadius: "30px",
    padding: "50px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "600px",
    border: "1px solid #f0f0f0",
  },
  formHeader: {
    marginBottom: "40px",
    textAlign: "center",
  },
  formTitle: {
    fontSize: "2.2rem",
    fontWeight: "800",
    color: "#0a0a0a",
    marginBottom: "15px",
  },
  formDivider: {
    width: "60px",
    height: "4px",
    background: "#f65801",
    margin: "0 auto 15px",
    borderRadius: "2px",
  },
  formSubtitle: {
    fontSize: "0.95rem",
    color: "#6b7280",
    lineHeight: "1.6",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "25px",
    marginBottom: "35px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "0.9rem",
    fontWeight: "700",
    color: "#0a0a0a",
    marginBottom: "10px",
    letterSpacing: "0.3px",
  },
  input: {
    padding: "16px 18px",
    border: "2px solid #e5e7eb",
    borderRadius: "14px",
    fontSize: "1rem",
   
    outline: "none",
    backgroundColor: "#fafafa",
    color: "#0a0a0a",
  },
  textarea: {
    resize: "vertical",
    minHeight: "140px",
   
  },
  submitButton: {
    width: "100%",
    padding: "18px",
    background: "#73BAAA",
    color: "white",
    border: "none",
    borderRadius: "14px",
    fontSize: "1.1rem",
    fontWeight: "800",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    letterSpacing: "0.5px",
  },
  buttonText: {
    display: "flex",
    alignItems: "center",
  },
  buttonIcon: {
    width: "22px",
    height: "22px",
    transition: "transform 0.3s ease",
  },
};

export default ContactForm;