import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Home, Award, Star, Zap } from 'lucide-react';

const statsData = [
  { number: 500, suffix: '+', label: 'Installations', icon: Home },
  { number: 15, suffix: '+', label: 'Years in Business', icon: Award },
  { number: 98, suffix: '%', label: 'Customer Satisfaction', icon: Star },
  { number: 50, suffix: 'MW+', label: 'Total Capacity', icon: Zap },
];

// Animated counter
const AnimatedCounter = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ count: value });
    }
  }, [inView, controls, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ count: 0 }}
      animate={controls}
      transition={{ duration: 2, ease: 'easeOut' }}
    >
      {({ count }) => (
        <span className="text-4xl font-extrabold text-gray-800 drop-shadow-md">
          {Math.floor(count)}
          {suffix}
        </span>
      )}
    </motion.div>
  );
};

// Stats component
const Stats = () => {
  return (
    <section
      className="py-24 text-black"
      style={{
        backgroundImage: "url('/sun-bg.svg'), linear-gradient(to bottom, #f0fdf4, #fffbea)",
        backgroundRepeat: 'repeat',
        backgroundSize: '80px',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-blue">
            Our <span className="text-brand-orange">Performance</span> Metrics
          </h2>
          <p className="text-lg text-brand-green max-w-2xl mx-auto">
            Celebrating impactful numbers across solar installations and customer happiness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8, type: 'spring' }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center text-center border-4 border-white hover:bg-yellow-100 hover:border-yellow-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-brand-orange text-white rounded-full p-4 mb-4 shadow-md">
                <stat.icon className="h-8 w-8" />
              </div>
              <AnimatedCounter value={stat.number} suffix={stat.suffix} />
              <div className="mt-2 text-gray-800 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
