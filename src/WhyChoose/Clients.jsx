import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Clients.css";

const testimonials = [
  {
    id: 1,
    name: "Niesha Phips",
    role: "Customer",
    image: "assets/img/testimonial/01.jpg",
    quote:
      "There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour or randomised words which look even slightly believable.",
  },
  {
    id: 2,
    name: "Daniel Porter",
    role: "Customer",
    image: "assets/img/testimonial/02.jpg",
    quote:
      "There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour or randomised words which look even slightly believable.",
  },
  {
    id: 3,
    name: "Ebony Swihart",
    role: "Customer",
    image: "assets/img/testimonial/03.jpg",
    quote:
      "There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour or randomised words which look even slightly believable.",
  },
  {
    id: 4,
    name: "Loreta Jones",
    role: "Customer",
    image: "assets/img/testimonial/04.jpg",
    quote:
      "There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour or randomised words which look even slightly believable.",
  },
];

const Clients = () => {
  return (
    <section className="testimonial-area ts-bg pt-90 pb-40">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT SIDE CONTENT */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="site-heading">
              <span className="site-title-tagline">
                <i className="far fa-helmet-safety" /> Testimonials
              </span>
              <h2 className="site-title text-white">
                What Our Client <span>Say's</span> About Us
              </h2>
              <p className="text-white">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when Internet tend to repeat
                predefined chunks.
              </p>
              <a href="/contact" className="theme-btn mt-30">
                Know More <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - SLIDER */}
          <div className="col-lg-8">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
              className="testimonial-slider"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id}>
                  <div className="testimonial-item">
                    <div className="testimonial-content">
                      <div className="testimonial-author-img">
                        <img src={t.image} alt={t.name} />
                      </div>
                      <div className="testimonial-author-info">
                        <h4>{t.name}</h4>
                        <p>{t.role}</p>
                        <div className="testimonial-rate">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fas fa-star" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="testimonial-quote">
                      <div className="testimonial-quote-icon">
                        <img src="assets/img/icon/quote.svg" alt="quote" />
                      </div>
                      <p>{t.quote}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
