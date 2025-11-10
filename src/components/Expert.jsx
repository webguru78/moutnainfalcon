import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Expert.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

import teamIcon from "/assets/img/icon/team.svg";
import moneyIcon from "/assets/img/icon/money.svg";
import consultationIcon from "/assets/img/icon/consultation.svg";
import designIcon from "/assets/img/icon/design.svg";

const Expert = () => {
  const containerRef = useRef(null);

  const features = [
    {
      id: "01",
      icon: teamIcon,
      title: "Our Experts Team",
      desc: "It is a long established fact that a reader will be distracted by the readable content when looking layout.",
    },
    {
      id: "02",
      icon: moneyIcon,
      title: "The Best Price",
      desc: "It is a long established fact that a reader will be distracted by the readable content when looking layout.",
    },
    {
      id: "03",
      icon: consultationIcon,
      title: "Daily Consultant",
      desc: "It is a long established fact that a reader will be distracted by the readable content when looking layout.",
    },
    {
      id: "04",
      icon: designIcon,
      title: "Custom Design",
      desc: "It is a long established fact that a reader will be distracted by the readable content when looking layout.",
    },
  ];

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".feature-item");

    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="feature-area pt-100" ref={containerRef}>
      <div className="container">
        <div className="feature-wrap row g-4">
          {features.map((feature) => (
            <div key={feature.id} className="col-md-6 col-lg-3">
              <motion.div
                className="feature-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="count">{feature.id}</span>
                <div className="feature-icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expert;
