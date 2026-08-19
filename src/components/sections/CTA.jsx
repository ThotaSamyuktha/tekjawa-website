import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-brand-blue/5 dark:from-brand-blue dark:to-brand-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-brand-blue">Ready</span>{' '}
            <span className="text-brand-orange">to Go Solar?</span>
          </h2>

          <p className="text-xl text-brand-green dark:text-brand-green mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to clean, renewable energy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/nr9He2m6vYstosrSA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-brand-blue text-white hover:bg-brand-orange"
              >
                Get Free Quote Today
              </Button>
            </a>

            <a
              href="https://forms.gle/nr9He2m6vYstosrSA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-brand-orange text-brand-orange hover:bg-brand-orange/10 dark:border-brand-orange dark:text-brand-orange dark:hover:bg-brand-orange/20"
              >
                Schedule Consultation
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
