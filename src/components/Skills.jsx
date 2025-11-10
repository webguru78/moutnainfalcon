import React, { useEffect } from "react";
import "./Skills.css";

const Skills = () => {
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach((progress) => {
      const value = progress.getAttribute("data-value");
      const bar = progress.querySelector(".progress-bar");
      let current = 0;
      const animate = () => {
        if (current <= value) {
          bar.style.width = `${current}%`;
          current++;
          requestAnimationFrame(animate);
        }
      };
      animate();
    });
  }, []);

  return (
    <div className="skill-area py-120">
      <div className="container">
        <div className="skill-wrap">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="skill-img wow fadeInLeft" data-wow-delay=".25s">
                <img src="assets/img/skill/01.jpg" alt="thumb" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="skill-content wow fadeInUp" data-wow-delay=".25s">
                <span className="site-title-tagline">
                  <i className="far fa-helmet-safety" /> Our Skills
                </span>
                <h2 className="site-title">
                  We Offers You Best <span>Construction</span> Services
                </h2>
                <p className="skill-text">
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable.
                </p>

                <div className="skill-progress">
                  <div className="progress-item">
                    <h5>
                      Construction <span className="percent">85%</span>
                    </h5>
                    <div className="progress" data-value="85">
                      <div className="progress-bar" role="progressbar" />
                    </div>
                  </div>

                  <div className="progress-item">
                    <h5>
                      Experience <span className="percent">65%</span>
                    </h5>
                    <div className="progress" data-value="65">
                      <div className="progress-bar" role="progressbar" />
                    </div>
                  </div>

                  <div className="progress-item">
                    <h5>
                      Architecture <span className="percent">75%</span>
                    </h5>
                    <div className="progress" data-value="75">
                      <div className="progress-bar" role="progressbar" />
                    </div>
                  </div>
                </div>

                <a href="#" className="theme-btn mt-5">
                  Learn More <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
