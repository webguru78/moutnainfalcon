import React, { useEffect } from "react";
import "./Division.css";
import AOS from "aos";
import "aos/dist/aos.css";

const divisions = [
  {
    id: 1,
    title: "Contracting Division",
    img: "assets/img/portfolio/01.jpg",
    services: [
      "Civil Services",
      "Mechanical Services",
      "Electrical Services",
      "Instrumentation Services",
      "Firefighting Services",
      "Fabrication",
      "Sandblasting & Painting",
      "Temporary Facilities",
    ],
  },
  {
    id: 2,
    title: "Scaffolding Division",
    img: "assets/img/portfolio/02.jpg",
    services: [
      "Manufacturing",
      "Formwork & Sales",
      "Rental",
      "Installation",
      "Designing & Engineering",
    ],
  },
  {
    id: 3,
    title: "Heavy Equipment Rental",
    img: "assets/img/portfolio/03.jpg",
    services: [
      "Heavy Lifting Equipment",
      "Light Lifting Equipment",
      "Transportation Equipment",
      "Construction Equipment",
      "Power Equipment Rental",
    ],
  },
  {
    id: 4,
    title: "General Trading & Recruitment",
    img: "assets/img/portfolio/04.jpg",
    services: [
      "General Trading",
      "Professional Manpower Rental",
      "Scrap Buyers & Dealers",
    ],
  },
];

const Division = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="division-section py-100">
      <div className="container">
        <div className="text-center mb-5">
          <span className="tagline">
            <i className="far fa-helmet-safety"></i> Our Divisions
          </span>
          <h2 className="main-title">
            Explore Our <span>Business Divisions</span>
          </h2>
          <p className="subtitle">
            Discover how our specialized divisions deliver excellence across industries
            with innovation, reliability, and quality craftsmanship.
          </p>
        </div>

        <div className="row g-4">
          {divisions.map((division) => (
            <div
              key={division.id}
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
            >
              <div className="division-card">
                <div className="division-img">
                  <img src={division.img} alt={division.title} className="img-fluid" />
                </div>
                <div className="division-body">
                  <h4>{division.title}</h4>
                  <ul>
                    {division.services.map((service, index) => (
                      <li key={index}>
                        <i className="fas fa-check-circle"></i> {service}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="read-more">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Division;
