import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer-area">
  <div className="footer-shape" style={{backgroundImage: 'url(assets/img/logo.png)'}} />
  <div className="footer-widget">
    <div className="container">
      <div className="footer-widget-wrap pt-100 pb-80">
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="footer-widget-box about-us">
              <a href="#" className="footer-logo">
                <img src="assets/img/logo.jpg" className='img-fluid '  alt />
              </a>
              <p className="mb-4 text-white mt-3">
                We are many variations of passages available but the majority have suffered
                alteration some form by injected humour looking layout words believable.
              </p>
              
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Company</h4>
              <ul className="footer-list">
                <li><a href="about.html"><i className="far fa-angle-double-right" />About Us</a></li>
                <li><a href="blog.html"><i className="far fa-angle-double-right" />Update News</a></li>
                <li><a href="testimonial.html"><i className="far fa-angle-double-right" />Testimonials</a>
                </li>
                <li><a href="contact.html"><i className="far fa-angle-double-right" />Contact Us</a></li>
                <li><a href="terms.html"><i className="far fa-angle-double-right" />Terms Of Service</a></li>
                <li><a href="privacy.html"><i className="far fa-angle-double-right" />Privacy policy</a></li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Services</h4>
              <ul className="footer-list">
                <li><a href="service.html"><i className="far fa-angle-double-right" />House Planning</a></li>
                <li><a href="service.html"><i className="far fa-angle-double-right" />Apartment Design</a></li>
                <li><a href="service.html"><i className="far fa-angle-double-right" />Building Construction</a></li>
                <li><a href="service.html"><i className="far fa-angle-double-right" />Architecture Design</a></li>
                <li><a href="service.html"><i className="far fa-angle-double-right" />Building Maintenance</a></li>
                <li><a href="service.html"><i className="far fa-angle-double-right" />Design &amp; Estimating</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-widget-box">
              <h4 className="footer-widget-title">Get In Touch</h4>
              <ul className="footer-contact">
                <li>
                  <div className="icon">
                    <i className="far fa-location-dot" />
                  </div>
                  <div className="content">
                    <h6>Our Address</h6>
                    <p className='text-white'>25/AB Milford Road, New York, USA</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="far fa-phone" />
                  </div>
                  <div className="content">
                    <h6>Call Us</h6>
                    <a href="tel:+21236547898">+2 123 654 7898</a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="content">
                    <h6>Mail Us</h6>
                    <a href="https://live.themewild.com/cdn-cgi/l/email-protection#fc95929a93bc99849d918c9099d29f9391"><span className="__cf_email__" data-cfemail="234a4d454c63465b424e534f460d404c4e">[email&nbsp;protected]</span></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="copyright">
      <div className="row">
        <div className="col-md-6 align-self-center">
          <p className="copyright-text text-white">
            © Copyright <span id="date" /> <a href="#"> MOUNTAIN FALCON  </a> All Rights Reserved.
          </p>
        </div>
        <div className="col-md-6 align-self-center">
          <ul className="footer-social">
            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
            <li><a href="#"><i className="fab fa-x-twitter" /></a></li>
            <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
            <li><a href="#"><i className="fab fa-youtube" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
</div>
  )
}

export default Footer