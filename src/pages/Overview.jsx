import React, { useEffect } from "react";
import Breadcrum from "../OverviewComponents/Breadcrum";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import Counter from "../components/Counter";
import Vision from "../components/Vision";
import ContactForm from "../OverviewComponents/ContactForm";

const Overview = () => {
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
      console.warn(
        "❌ jQuery not found. Make sure it's loaded in index.html correctly."
      );
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Breadcrum />
      <About />
      <Vision />
      <Counter />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Overview;
