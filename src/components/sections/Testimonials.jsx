import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Samyuktha',
    role: 'Homeowner – Hyderabad',
    feedback:
      "Tekjawa Solar reduced my electricity bill by 80%! Smooth process and helpful team. Highly recommend.",
    stars: 5,
  },
  {
    name: 'Divya',
    role: 'School Administrator – Pune',
    feedback:
      "We installed a rooftop solar system for our school. Tekjawa made it easy, efficient, and affordable.",
    stars: 4,
  },
  {
    name: 'Pallavi',
    role: 'Factory Owner – Coimbatore',
    feedback:
      "Industrial solar setup done in 4 weeks. They took care of everything including subsidy paperwork.",
    stars: 5,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // ✅ Auto-advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 y-20 bg-blue-50 text-black  relative" id="testimonials">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-solar-yellow rounded-full opacity-20 blur-3xl -z-10" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-solar-orange rounded-full opacity-10 blur-3xl -z-10" />

      <div className="max-w-xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
  <span className="text-[#1f58a8]">What Our </span>
  <span className="solar-text-gradient">Customers Say</span>
</h2>



        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-md p-6"
            >
              <Quote className="h-8 w-8 text-solar-orange mb-4 mx-auto" />
              <p className="text-gray-700 text-sm mb-6">"{testimonials[index].feedback}"</p>
              <div className="flex justify-center mb-2">
                {Array.from({ length: testimonials[index].stars }).map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <h4 className="text-solar-dark font-semibold">{testimonials[index].name}</h4>
              <p className="text-gray-500 text-xs">{testimonials[index].role}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-6 px-6">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-solar-orange hover:bg-solar-orange hover:text-white transition"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-solar-orange hover:bg-solar-orange hover:text-white transition"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full ${
                  i === index ? 'bg-solar-orange' : 'bg-gray-400'
                } transition`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;