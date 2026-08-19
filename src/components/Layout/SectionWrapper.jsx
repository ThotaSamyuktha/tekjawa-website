// src/components/layout/SectionWrapper.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ id, children }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-blue/5 to-brand-green/10 dark:from-brand-blue/80 dark:to-brand-green/80"
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </motion.section>
  );
};

export default SectionWrapper;
