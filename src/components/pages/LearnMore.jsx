import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Clock, Leaf } from 'lucide-react';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const LearnMore = () => {
  // ✅ Scroll to top when LearnMore page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ✅ Enables Get Quote button
  const handleQuoteClick = () => {
    window.open('https://forms.gle/nr9He2m6vYstosrSA', '_blank');
  };

  return (
    <>
      <Header handleQuoteClick={handleQuoteClick} />

      <section className="min-h-screen bg-gradient-to-br from-brand-orange/5 via-white to-brand-green/10 py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">

          {/* 🔸 Animated Video at Top */}
          <div className="mb-12">
            <video
              src="/solar.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* 🔸 Title and Description */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-brand-blue mb-6"
          >
            Our <span className="text-brand-orange">Background</span>
          </motion.h1>

          <p className="text-brand-green max-w-2xl mx-auto mb-10">
            Tekjawa Solar Solutions has been dedicated to clean energy innovation since 2015. With expert
            qualifications and industry experience, we continue to drive sustainable transformation across India.
          </p>

          {/* 🔸 Info Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-md transition-all duration-300 hover:bg-brand-blue/10 hover:text-brand-blue hover:scale-105 hover:shadow-xl cursor-pointer">
              <Clock className="mx-auto h-10 w-10 text-brand-green mb-3 transition-colors duration-300 group-hover:text-brand-blue" />
              <h3 className="text-xl font-semibold mb-1 text-brand-blue group-hover:text-brand-blue">Since 2015</h3>
              <p className="text-brand-green text-sm group-hover:text-brand-blue">
                Years of hands-on experience in renewable energy deployment and project execution.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md transition-all duration-300 hover:bg-brand-blue/10 hover:text-brand-blue hover:scale-105 hover:shadow-xl cursor-pointer">
              <GraduationCap className="mx-auto h-10 w-10 text-brand-blue mb-3 transition-colors duration-300 group-hover:text-brand-blue" />
              <h3 className="text-xl font-semibold mb-1 text-brand-blue group-hover:text-brand-blue">Education</h3>
              <p className="text-brand-green text-sm group-hover:text-brand-blue">
                Masters in Tech Management, Bachelors in Electrical & Electronics Engineering.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md transition-all duration-300 hover:bg-brand-blue/10 hover:text-brand-blue hover:scale-105 hover:shadow-xl cursor-pointer">
              <Leaf className="mx-auto h-10 w-10 text-brand-orange mb-3 transition-colors duration-300 group-hover:text-brand-blue" />
              <h3 className="text-xl font-semibold mb-1 text-brand-blue group-hover:text-brand-blue">Passion for Sustainability</h3>
              <p className="text-brand-green text-sm group-hover:text-brand-blue">
                Driven to reduce carbon footprint and promote clean, green energy solutions.
              </p>
            </div>
          </div>

          {/* 🔸 Optional Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-xl shadow-lg max-w-3xl mx-auto"
          >
            <img
              src="/solarpanel.jpg"
              alt="Installing solar panel"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        <div className="mt-16" />
      </section>
      <Footer />
    </>
  );
};

export default LearnMore;
