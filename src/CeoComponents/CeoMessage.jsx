import React from "react";
import "./CeoMessage.css";

export default function CeoMessage() {
  return (
    <div className="ceo-wrapper">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT CARD */}
          <div className="col-lg-5">
            <div className="ceo-card">
              {/* CEO Photo */}
              <div className="ceo-avatar">MF</div>

              <h2 className="ceo-name">MOHAMMED THASLEEM</h2>
              <p className="ceo-role">Founder & CEO</p>
              <p className="ceo-company">Mountain Falcon Company</p>

              {/* Quote */}
              <div className="ceo-quote-box">
                <svg
                  fill="#73BAAA"
                  viewBox="0 0 24 24"
                  className="quote-icon"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
                <p className="ceo-quote">
                  "Together, we rise beyond boundaries—building a legacy of excellence,
                  trust, and innovation."
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-7">
            <div className="ceo-text-section">
              <h1 className="ceo-title">
                A Message from Our <span>CEO</span>
              </h1>
              <div className="ceo-line"></div>

              <p className="ceo-text">
                Mountain Falcon Company began as a humble vision rooted in passion and
                resilience. Over the years, it has grown into a dynamic organization
                driven by hardworking employees, trusted partners, and loyal customers.
                Together, they form the foundation of the Mountain Falcon Family.
              </p>

              <p className="ceo-text">
                Today, we stand on the brink of exciting expansion. With new business
                verticals, innovative ideas, and rapidly evolving opportunities, our
                team continues to adapt, innovate, and reshape the future. We believe
                in sustainable growth, strategic leadership, and empowering people to
                achieve greatness.
              </p>

              <p className="ceo-text">
                As we move forward, we welcome ambitious individuals, partners, and
                organizations to collaborate with us. Let’s build, innovate, and grow
                together—towards a stronger and brighter future.
              </p>

              <button className="ceo-btn">Let’s Build Together →</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
