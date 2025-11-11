import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyBreadcrumb from "../WhyChoose/WhyBreadcrum";
import Working from "../components/Working";
import Clients from "../WhyChoose/Clients";
import Counter from "../components/Counter";
import Partner from "../components/Partner";

const WhyChoose = () => {
  useEffect(() => {
    if (window.jQuery) {
      console.log("✅ jQuery is loaded.");

      window.jQuery(document).ready(function () {
        console.log("✅ DOM ready, jQuery plugins can run now.");

        if (typeof window.initAnimations === "function") {
          window.initAnimations();
        }
      });
    } else {
      console.warn("❌ jQuery not found. Make sure it's loaded in index.html correctly.");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <WhyBreadcrumb />
      <Working />
      <Clients />
      <Counter />
      <Partner />
      <Footer />
    </div>
  );
};

export default WhyChoose;
