import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className="header">
        {/* header top */}
        <div className="header-top">
          <div className="container">
            <div className="header-top-wrap">
              <div className="header-top-left">
                <div className="header-top-list">
                  <ul>
                    <li>
                      <a href="mailto:info@mountainfalcon.com">
                        <i className="far fa-envelopes" /> info@mountainfalcon.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+966123456789">
                        <i className="far fa-phone-volume" /> +966 12 345 6789
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-alarm-clock" /> Sun - Thu (08AM - 05PM)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-top-right">
                <div className="header-top-lang">
                  <div className="dropdown">
                    <a href="#" className="top-lang dropdown-toggle" data-bs-toggle="dropdown">
                      <i className="fal fa-globe" /> English
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">English</a></li>
                      <li><a className="dropdown-item" href="#">Arabic</a></li>
                    </ul>
                  </div>
                </div>
                <div className="header-top-social">
                  <span>Follow Us: </span>
                  <a href="#"><i className="fab fa-facebook" /></a>
                  <a href="#"><i className="fab fa-x-twitter" /></a>
                  <a href="#"><i className="fab fa-instagram" /></a>
                  <a href="#"><i className="fab fa-linkedin" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* header top end */}

        {/* navbar */}
        <div className="main-navigation">
          <nav className="navbar navbar-expand-lg">
            <div className="container position-relative">
              <a className="navbar-brand" href="/">
                <img src="assets/img/logo/logo.png" alt="Mountain Falcon Company" />
              </a>
              <div className="mobile-menu-right">
                <div className="mobile-menu-btn">
                  <button type="button" className="nav-right-link search-box-outer">
                    <i className="far fa-search" />
                  </button>
                </div>
                <button 
                  className="navbar-toggler" 
                  type="button" 
                  data-bs-toggle="offcanvas" 
                  data-bs-target="#offcanvasNavbar" 
                  aria-controls="offcanvasNavbar" 
                  aria-label="Toggle navigation"
                >
                  <span />
                  <span />
                  <span />
                </button>
              </div>

              <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                  <a href="/" className="offcanvas-brand" id="offcanvasNavbarLabel">
                    <img src="assets/img/logo/logo.png" alt="Mountain Falcon Company" />
                  </a>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                    <i className="far fa-xmark" />
                  </button>
                </div>

                <div className="offcanvas-body gap-xl-4">
                  <ul className="navbar-nav justify-content-end flex-grow-1">
                    
                    {/* Home */}
                    <li className="nav-item">
                      <a className="nav-link active" href="/">Home</a>
                    </li>

                    {/* About Us with Dropdown */}
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                        About Us
                      </a>
                      <ul className="dropdown-menu fade-down">
                        <li>
                          <a className="dropdown-item" href="/about/overview">
                            <i className="far fa-info-circle" /> Overview
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/about/why-choose-us">
                            <i className="far fa-star" /> Why Choose Us
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/about/quality-policy">
                            <i className="far fa-certificate" /> Quality Policy
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/about/hse-policy">
                            <i className="far fa-shield-check" /> HSE Policy
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/about/ceo-message">
                            <i className="far fa-user-tie" /> CEO Message
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/about/organization-chart">
                            <i className="far fa-sitemap" /> Organization Chart
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/about/legal-documents">
                            <i className="far fa-file-contract" /> Legal Documents
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* Services */}
                    <li className="nav-item">
                      <a className="nav-link" href="/services">Services</a>
                    </li>

                    {/* Company Profile */}
                    <li className="nav-item">
                      <a className="nav-link" href="/company-profile">Company Profile</a>
                    </li>

                    {/* Our Work */}
                    <li className="nav-item">
                      <a className="nav-link" href="/our-work">Our Work</a>
                    </li>

                    {/* Clients */}
                    <li className="nav-item">
                      <a className="nav-link" href="/clients">Clients</a>
                    </li>

                    {/* Contact */}
                    <li className="nav-item">
                      <a className="nav-link" href="/contact">Contact</a>
                    </li>

                  </ul>

                  {/* nav-right */}
                  <div className="nav-right">
                    <div className="search-btn">
                      <button type="button" className="nav-right-link search-box-outer">
                        <i className="far fa-search" />
                      </button>
                    </div>
                    <div className="nav-btn">
                      <a href="/contact" className="theme-btn">
                        Get Quote <i className="fas fa-arrow-right" />
                      </a>
                    </div>
                    <button 
                      type="button" 
                      className="sidebar-btn nav-right-link" 
                      data-bs-toggle="offcanvas" 
                      data-bs-target="#sidebarPopup"
                    >
                      <span />
                      <span />
                      <span />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* navbar end*/}
      </header>
    </div>
  )
}

export default Navbar