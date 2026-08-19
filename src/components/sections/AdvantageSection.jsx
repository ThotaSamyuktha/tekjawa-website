import React from 'react';
import { motion } from 'framer-motion';
import {
  BadgeCheck,
  Shield,
  Wrench,
  Landmark,
  Zap,
  Settings,
} from 'lucide-react';

const advantages = [
  {
    icon: BadgeCheck,
    title: '25-Year Solar Warranty',
    description: 'Enjoy long-lasting panel efficiency backed by 25 years of manufacturer warranty.',
  },
  {
    icon: Shield,
    title: '7-Year Inverter Warranty',
    description: 'Reliable inverter performance secured for up to 7 years.',
  },
  {
    icon: Wrench,
    title: '1 Year Free Service',
    description: 'Get hassle-free annual service visits at no cost for the first year.',
  },
  {
    icon: Settings,
    title: 'Low Maintenance',
    description: 'No moving parts— hassle-free upkeep.'
  },
  {
    icon: Landmark,
    title: 'Easy Loan Availability',
    description: 'Simplified financing with leading NBFCs and banks—zero-cost EMI options.',
  },
  {
    icon: Zap,
    title: 'Lower Electricity Bills',
    description: 'Slash your power bills by up to 80% by switching to solar.',
  },
];

const AdvantageSection = () => (
  <section id="advantages" className="py-24 bg-white px-6">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-brand-blue"
      >
        Our <span className="text-brand-orange">Solar Advantage</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-brand-green mt-4 max-w-2xl mx-auto"
      >
        Our solutions are built on trust, reliability, and performance.
      </motion.p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {advantages.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
          className="bg-pink-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition"
        >
          <item.icon className="h-10 w-10 text-solar-orange mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-solar-dark">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.description}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="mt-20 bg-gradient-to-br from-yellow-50 to-green-50 p-10 rounded-3xl shadow-lg text-center max-w-4xl mx-auto"
    >
    <p className="text-2xl font-medium mb-2 text-solar-dark">
      500+ Successful Installations • 2 MW+ Deployed • Trusted Across South India
    </p>
    <p className="text-gray-700">
      Powered by innovation and trust — Tekjawa Solar is lighting the way to a greener future.
    </p>

    </motion.div>
  </section>
);

export default AdvantageSection;
