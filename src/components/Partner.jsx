import React from "react";
import "./Partner.css";

const partners = [
  "assets/img/partner/01.png",
  "assets/img/partner/02.png",
  "assets/img/partner/03.png",
  "assets/img/partner/11.jpg",
  "assets/img/partner/8.jpg",
  "assets/img/partner/7.jpg",
  "assets/img/partner/01.png",
  "assets/img/partner/02.png",
  "assets/img/partner/03.png",
  "assets/img/partner/11.jpg",
  "assets/img/partner/8.jpg",
  "assets/img/partner/7.jpg",
];

const Partner = () => {
  return (
    <section className="partner-area bg pt-50 pb-50 mb-120">
      <div className="container">
        <div className="text-center mb-4">
          <h5 className="partner-subtitle">Our Trusted Partners</h5>
          <h2 className="partner-title">
            We Collaborate With <span>Top Brands</span>
          </h2>
        </div>

        <div className="row g-4 justify-content-center">
          {partners.map((logo, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2">
              <div className="partner-logo">
                <img src={logo} alt={`Partner ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
