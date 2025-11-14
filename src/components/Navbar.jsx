import React from 'react'
import { Link } from 'react-router-dom'

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
                        <i className="far fa-envelopes" /> mfcc.saudi@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+966123456789">
                        <i className="far fa-phone-volume" /> +966 12 345 6789
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-alarm-clock" /> Mond - Sund 
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-top-right">
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
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img
                  src="assets/img/mfc.png"
                  alt="Mountain Falcon Company"
                  
                />
              </Link>

              <div className="mobile-menu-right">
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

              <div
                className="offcanvas offcanvas-start"
                tabIndex={-1}
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header">
                  <a href="/" className="offcanvas-brand" id="offcanvasNavbarLabel">
                    <img src="assets/img/mfc.png" alt="Mountain Falcon Company" />
                  </a>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
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
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        About Us
                      </a>
                      <ul className="dropdown-menu fade-down">
                        <li>
                          <Link className="dropdown-item" to="/overview">
                            <i className="far fa-info-circle" /> Overview
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/why-choose">
                            <i className="far fa-star" /> Why Choose Us
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/quality">
                            <i className="far fa-certificate" /> Quality Policy
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/hse-policy">
                            <i className="far fa-shield-check" /> HSE Policy
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/ceo">
                            <i className="far fa-user-tie" /> CEO Message
                          </Link>
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
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Our Division
                      </a>
                      <ul className="dropdown-menu fade-down">
                        <li>
                          <Link className="dropdown-item" to="/overview">
                            <i className="far fa-info-circle" /> Contracting Division
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/why-choose">
                            <i className="far fa-star" />Scaffolding
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/quality">
                            <i className="far fa-certificate" /> Heavy Equipment Rental
                          </Link>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/about/hse-policy">
                            <i className="far fa-shield-check" /> General Trading & Recruitment
                          </a>
                        </li>
                       
                      
                      </ul>
                    </li>

                    {/* Services */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/services">Services</Link>
                    </li>

                    {/* Company Profile */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/company">Company Profile</Link>
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
