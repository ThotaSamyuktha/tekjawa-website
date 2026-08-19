import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';

// Homepage Sections
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import AdvantageSection from '@/components/sections/AdvantageSection';
import Testimonials from '@/components/sections/Testimonials';
import SubsidyCalculator from '@/components/sections/SubsidyCalculator';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

// Pages
import LearnMore from '@/components/pages/LearnMore';
import Projects from '@/components/pages/Projects';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to anchor if hash is present
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // 🔹 Quote button handler (Google Form)
  const handleQuoteClick = () => {
    window.open('https://forms.gle/nr9He2m6vYstosrSA', '_blank');
  };

  // 🔹 Navigate to homepage and scroll to #contact
  const handleContactClick = () => {
    if (location.pathname !== '/') {
      navigate('/#contact');
    } else {
      const el = document.querySelector('#contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleServiceClick = () => {
    if (location.pathname !== '/') {
      navigate('/#services');
    } else {
      const el = document.querySelector('#services');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Tekjawa Solar Solutions - Leading Solar Energy Company</title>
        <meta
          name="description"
          content="Transform your energy future with Tekjawa Solar Solutions. Professional solar panel installation, maintenance, and renewable energy solutions for homes and businesses."
        />
      </Helmet>

      <Routes>
        {/* ✅ Main Landing Page */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white scroll-smooth">
              <Header
                handleQuoteClick={handleQuoteClick}
                handleContactClick={handleContactClick}
                handleServiceClick={handleServiceClick}
              />
              <main>
                <section id="hero">
                  <Hero
                    handleQuoteClick={handleQuoteClick}
                    handleContactClick={handleContactClick}
                  />
                </section>
                <Stats />
                <section id="services">
                  <Services handleServiceClick={handleServiceClick} />
                </section>
                <section id="why-us">
                  <WhyChooseUs />
                </section>
                <section id="advantages">
                  <AdvantageSection />
                </section>
                <section id="testimonials">
                  <Testimonials />
                </section>
                <section id="subsidy">
                  <SubsidyCalculator />
                </section>
                <CTA
                  handleQuoteClick={handleQuoteClick}
                  handleContactClick={handleContactClick}
                />
                <section id="contact">
                  <Contact handleContactClick={handleContactClick} />
                </section>
              </main>
              <Footer />
              <Toaster />
            </div>
          }
        />

        {/* ✅ Learn More Page */}
        <Route
          path="/learnmore"
          element={
            <LearnMore
              handleQuoteClick={handleQuoteClick}
              handleContactClick={handleContactClick}
              handleServiceClick={handleServiceClick}
            />
          }
        />

        {/* ✅ Projects Page */}
        <Route
          path="/projects"
          element={
            <Projects handleQuoteClick={handleQuoteClick} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
