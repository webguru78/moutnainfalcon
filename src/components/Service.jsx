import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ServiceSlider.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    img: "assets/img/service/01.jpg",
    icon: "assets/img/icon/construction.svg",
    title: "Building Construction",
    desc: "There are many variations of fact by injected humour words first true majority have suffered some form handful of mode believable.",
    link: "/service-single",
  },
  {
    id: "02",
    img: "assets/img/service/02.jpg",
    icon: "assets/img/icon/maintenance.svg",
    title: "Building Maintenance",
    desc: "There are many variations of fact by injected humour words first true majority have suffered some form handful of mode believable.",
    link: "/service-single",
  },
  {
    id: "03",
    img: "assets/img/service/03.jpg",
    icon: "assets/img/icon/design-2.svg",
    title: "Design & Estimating",
    desc: "There are many variations of fact by injected humour words first true majority have suffered some form handful of mode believable.",
    link: "/service-single",
  },
  {
    id: "04",
    img: "assets/img/service/04.jpg",
    icon: "assets/img/icon/plan.svg",
    title: "House Planning",
    desc: "There are many variations of fact by injected humour words first true majority have suffered some form handful of mode believable.",
    link: "/service-single",
  },
  {
    id: "05",
    img: "assets/img/service/05.jpg",
    icon: "assets/img/icon/contract.svg",
    title: "General Contracting",
    desc: "There are many variations of fact by injected humour words first true majority have suffered some form handful of mode believable.",
    link: "/service-single",
  },
  {
    id: "06",
    img: "assets/img/service/06.jpg",
    icon: "assets/img/icon/building.svg",
    title: "Apartment Design",
    desc: "There are many variations of fact by injected humour words first true majority have suffered some form handful of mode believable.",
    link: "/service-single",
  },
  {
    id: "07",
    img: "assets/img/service/07.jpg",
    icon: "assets/img/icon/sustainability.svg",
    title: "Building Sustainability",
    desc: "There are many variations of fact by injected humour words first true majority have suffered some form handful of mode believable.",
    link: "/service-single",
  },
  {
    id: "08",
    img: "assets/img/service/08.jpg",
    icon: "assets/img/icon/architecture.svg",
    title: "Architecture Design",
    desc: "There are many variations of fact by injected humour words first true majority have suffered some form handful of mode believable.",
    link: "/service-single",
  },
];

export default function ServiceSlider() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="service-area bg py-80" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="row g-4 align-items-center mb-4">
          <div className="col-lg-6">
            <div className="site-heading mb-0">
              <span className="site-title-tagline">
                <i className="far fa-helmet-safety" /> Services
              </span>
              <h2 className="site-title">
                What Services we are <span>provide</span> to you
              </h2>
            </div>
          </div>
          <div className="col-lg-4">
            <p>
              There are many variations of passages available but the majority
              have suffered alteration in some form by injected humour slightly
              believable.
            </p>
          </div>
          <div className="col-lg-2 text-end">
            <a href="/services" className="theme-btn">
              All Services <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="service-slider"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="service-item">
                <span className="count">{service.id}</span>
                <div className="service-img">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="service-icon">
                  <img src={service.icon} alt={service.title} />
                </div>
                <div className="service-content">
                  <h4 className="service-title">
                    <a href={service.link}>{service.title}</a>
                  </h4>
                  <p className="service-text">{service.desc}</p>
                  <a href={service.link} className="theme-btn">
                    Learn More <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="swiper-button-prev custom-arrow">
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className="swiper-button-next custom-arrow">
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
    </section>
  );
}
