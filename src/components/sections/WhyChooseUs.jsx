import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Star, Sun, Smile } from 'lucide-react';

const benefitsData = [
  {
    icon: Battery,
    title: 'Premium Quality',
    description: 'Top-tier solar panels and components with industry-leading warranties.'
  },
  {
    icon: Smile,
    title: 'Expert Team',
    description: 'Certified professionals with years of experience in solar installation.'
  },
  {
    icon: Star,
    title: 'Proven Results',
    description: 'Track record of successful installations and satisfied customers.'
  },
  {
    icon: Sun,
    title: 'Environmental Impact',
    description: 'Helping reduce carbon footprint and promote sustainable energy.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-brand-green/5 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">
              Why Choose <br></br> <span className="text-brand-orange">Tekjawa Solar?</span>
            </h2>
            <p className="text-xl text-brand-green mb-10">
             Tekjawa Solar is your trusted partner in harnessing clean, renewable energy with reliable technology and expert guidance.
            </p>
            
            <div className="space-y-6">
              {benefitsData.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30}}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4  bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition"
                >
                  <benefit.icon className="h-8 w-8 mt-1 flex-shrink-0 ${benefit.color}" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-solar-dark">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img 
  src="solarpanel1.jpg"
  alt="Solar panel installation team working on residential roof"
  className="w-full  rounded-4xl solar-shadow"
            />

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 solar-shadow">
              <div className="flex items-center space-x-3">
                <Battery className="h-8 w-8 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">25+</div>
                  <div className="text-gray-600">Year Warranty</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;