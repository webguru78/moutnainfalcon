import React from "react";
import { Link } from "react-router-dom"; // ✅ Use React Router for navigation

const WhyBreadcrumb = () => {
  return (
    <div
      className="site-breadcrumb"
      style={{ backgroundImage: 'url("/assets/img/breadcrumb/01.jpg")' }}
    >
      <div className="container">
        <h2 className="breadcrumb-title" style={{fontSize:"3rem"}}>Why Choose Us</h2>
        <ul className="breadcrumb-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">Why Us</li>
        </ul>
      </div>
    </div>
  );
};

export default WhyBreadcrumb;
