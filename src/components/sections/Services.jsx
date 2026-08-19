import { motion } from 'framer-motion';
import { Home, Building, Factory, Dribbble, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: Home,
    title: 'Rooftop Solar',
    description: 'Slash electricity bills for homes with efficient rooftop systems.',
    bullets: ['Govt. subsidy', '0% EMI', 'App monitoring', '25-year warranty']
  },
  {
    icon: Building,
    title: 'Commercial Solar',
    description: 'Energy savings for schools, hospitals, and offices.',
    bullets: ['Bulk pricing', 'Energy audits', 'Quick ROI', 'Net metering']
  },
  {
    icon: Factory,
    title: 'Industrial Plants',
    description: 'MW-scale grid-tied or captive plants for large facilities.',
    bullets: ['PPA available', 'Remote monitoring', 'High ROI', 'Custom design']
  },
  {
    icon: Dribbble,
    title: 'Solar Pumps',
    description: 'Water pumping solutions for agriculture & remote areas.',
    bullets: ['MNRE subsidy', 'Battery backup', 'DC/AC models', 'Support']
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="relative py-20 bg-white-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-brand-blue"
        >
          Our <span className="text-brand-orange">Solar Services</span>
        </motion.h2>
        <p className="text-brand-green mb-12">
          Clean, affordable and smart energy for every sector.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, backgroundColor: 'rgba(46,139,47,0.08)' }}
              className="relative bg-white bg-opacity-90 backdrop-blur-xl p-6 overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl hover:bg-brand-green/10 border border-brand-green/20"
              style={{
                clipPath: 'ellipse(120% 100% at 50% 100%)',
                borderRadius: '1.5rem',
              }}
            >
              <s.icon className="h-10 w-10 mb-4 text-red-500 mx-auto" />
              <h3 className="text-xl font-semibold text-solar-dark mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{s.description}</p>
              <ul className="space-y-2 text-left">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex items-center">
                    <Star className="h-5 w-5 text-orange-500 mr-2" />
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="mt-12">
          <Button
            onClick={() => navigate('/learnmore')}
            className="bg-orange-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-brand-blue hover:text-white hover:scale-105 transition flex items-center gap-2 mx-auto"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
