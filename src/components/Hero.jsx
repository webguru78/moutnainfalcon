import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HeroSection.css";

gsap.registerPlugin(ScrollTrigger);

const heroSlides = [
  {
    id: 1,
    background: "assets/img/hero/slider-1.jpg",
    subtitle: "Build Your Dream",
    title: "Mountain Falcon Company",
    text: "Together, we build a future that exceeds expectations",
  },
  {
    id: 2,
    background: "assets/img/hero/slider-2.jpg",
    subtitle: "Build Your Dream",
    title: "Mountain Falcon Company",
    text: "Together, we build a future that exceeds expectations",
  },
  {
    id: 3,
    background: "assets/img/hero/slider-3.jpg",
    subtitle: "Build Your Dream",
    title: "Mountain Falcon Company",
    text: "Together, we build a future that exceeds expectations",
  },
];

export default function HeroSection() {
  const heroRefs = useRef([]);

  heroRefs.current = [];
  const addToRefs = (el) => {
    if (el && !heroRefs.current.includes(el)) heroRefs.current.push(el);
  };

  useEffect(() => {
    heroRefs.current.forEach((el) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      timeline
        .from(el.querySelector(".hero-title"), {
          y: 80,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
        })
        .from(
          el.querySelector("p"),
          {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=1"
        )
        .from(
          el.querySelector(".hero-btn"),
          {
            y: 40,
            opacity: 0,
            duration: 1.0,
            ease: "power4.out",
          },
          "-=0.8"
        );
    });
  }, []);

  return (
    <main className="main">
      <section className="hero-section">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          effect="fade"
          pagination={{ clickable: true }}
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="hero-single"
                style={{ backgroundImage: `url(${slide.background})` }}
              >
                <div className="overlay"></div>
                <div className="container">
                  <div className="hero-content text-center" ref={addToRefs}>
                    <h6 className="hero-sub-title">
                      <i className="fal fa-helmet-safety"></i> {slide.subtitle}
                    </h6>
                    <h1 className="hero-title">{slide.title}</h1>
                    <p>{slide.text}</p>
                    <div className="hero-btn">
                      
                      <a href="/contact" className="theme-btn2">
                        Learn More <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}
