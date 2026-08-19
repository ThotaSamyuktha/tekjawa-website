import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const wordVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', duration: 0.7, bounce: 0.18 }
  }
};

const h1Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
};

const Hero = ({ handleQuoteClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          alt="Solar panels"
          className="w-full h-full object-cover brightness-95"
          src="https://res.cloudinary.com/df8xowqdo/image/upload/v1752395958/tekjawa_logo-8_kt4ljt.jpg"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Stronger overlay for contrast */}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center justify-center gap-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white via-white to-brand-orange bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] mb-2"
        >
          Powering a Brighter Tomorrow
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-center gap-2 mb-4"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">with</span>
          <span className="bg-gradient-to-r from-orange-300 via-brand-orange to-brand-blue bg-clip-text text-transparent font-extrabold text-2xl sm:text-3xl md:text-4xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] align-middle">Tekjawa Solar</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
          className="mt-4"
        >
          <Button
            onClick={handleQuoteClick}
            className="bg-brand-orange hover:bg-brand-blue text-white font-bold px-8 py-4 rounded-full shadow-xl text-lg sm:text-xl transition-all duration-300"
            size="lg"
          >
            Get Quote <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      {/* Sun Icon */}
      <motion.div
        className="absolute top-10 left-5 text-[#fdb913]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Sun className="h-10 w-10 drop-shadow-md" />
      </motion.div>

      {/* Zap Icon */}
      <motion.div
        className="absolute bottom-10 right-5 text-[#f47820]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <Zap className="h-10 w-10 drop-shadow-md" />
      </motion.div>
    </section>
  );
};

export default Hero;
