import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';
import Expert from '../components/Expert';
import About from '../components/About';
import Counter from '../components/Counter';
import CustomCursor from '../components/Cursor/CustomCursor';
import Working from '../components/Working';
import Service from '../components/Service';
import Skills from '../components/Skills';
import Partner from '../components/Partner';
import Vision from '../components/Vision';
import Footer from '../components/Footer';

export default function Home() {
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
    
      <main className="main">
        <div className='hero-section'>
          <CustomCursor/>
           <Navbar />
           <HeroSection />
          <Expert />
          <About/>
           <Counter/>
           <Working/>
           <Service/>
          <Vision/>
           <Skills/>
           <Partner/>
           <Footer/>
         
        </div>
      </main>
    
  );
}