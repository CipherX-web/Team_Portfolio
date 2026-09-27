import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/hero';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectsMobile from './components/ProjectsMobile';
import Certifications from './components/Certifications';
import Education from './components/Education';
import SocialMagnet from './components/SocialMagnet';
import ContactForm from './components/ContactForm';
import { SmoothCursor } from './components/ui/smooth-cursor';

import './App.css'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSplineReady, setIsSplineReady] = useState(false);

  // Safety fallback: reveal site after 6.5s in case of slow connection
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      setIsSplineReady(true);
    }, 6500);
    return () => clearTimeout(safetyTimer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Only initialize Lenis on desktop with mouse wheel
    // Mobile devices perform best using native hardware-accelerated 120Hz/60Hz touch scrolling
    let lenis = null;
    let tickerCallback = null;

    if (window.innerWidth >= 768) {
      lenis = new Lenis({
        duration: 1.0,
        lerp: 0.1, // Snappy and responsive without sluggish lag
        smoothWheel: true,
        syncTouch: false,
      });

      lenis.on('scroll', ScrollTrigger.update);

      tickerCallback = (time) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(tickerCallback);
    }

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (lenis) lenis.destroy();
      if (tickerCallback) gsap.ticker.remove(tickerCallback);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Preloader isReady={isSplineReady} />
      {!isMobile && <SmoothCursor />}
      <Navbar />
      <main>
        <Hero onSplineReady={() => setIsSplineReady(true)} />
        <About />
        <Skills />
        <Education />
        {isMobile ? <ProjectsMobile /> : <Projects />}
        {/* <Certifications /> */}
        <ContactForm />
        <SocialMagnet />
      </main>
    </>
  )
}

export default App

