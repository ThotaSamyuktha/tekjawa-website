import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, X } from 'lucide-react';

const contactData = [
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91 8297863593',
    description: 'Mon-Fri 8AM-6PM'
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'team@tekjawa.com',
    description: 'We reply within 24 hours'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '17-83-2, Lane 2, Vijaya Residency, Kamala Nagar, Dilsukhnagar, Hyderabad, Telangana 500060',
    description: 'Schedule an appointment'
  }
];

// Animation variants
const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 20 }
};

const Contact = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <section id="contact" className="py-20 bg-white from-brand-blue/5 to-brand-green/10 dark:from-brand-blue dark:to-brand-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue dark:text-brand-blue">
            Let’s <span className="text-brand-orange">Connect</span>
          </h2>
          <p className="text-xl text-brand-green dark:text-brand-green">
            Whether you’re just curious or ready to go solar, we’re here to help — reach out anytime!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactData.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedContact(contact)}
              className="bg-brand-green/10 border border-brand-green/30 rounded-2xl p-8 text-center solar-shadow hover:shadow-2xl transition-all duration-300 cursor-pointer dark:from-brand-blue dark:to-brand-green"
            >
              <contact.icon className="h-12 w-12 text-brand-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-brand-blue dark:text-brand-blue">{contact.title}</h3>
              <p className="text-lg text-brand-green dark:text-brand-green mb-2">{contact.content}</p>
              <p className="text-brand-blue dark:text-brand-blue">{contact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup with framer-motion */}
      <AnimatePresence>
        {selectedContact && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-[#eaf9fb] to-[#fffbe6] dark:from-[#2e2e2e] dark:to-[#1a1a1a] p-8 rounded-2xl w-[95%] sm:w-[700px] max-w-[95vw] text-center relative shadow-lg"
            >
              <button
                onClick={() => setSelectedContact(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <selectedContact.icon className="h-10 w-10 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {selectedContact.title}
              </h3>

              {selectedContact.title === 'Call Us' ? (
                <a
                  href={`tel:${selectedContact.content}`}
                  className="text-lg text-orange-600 underline mb-2 block"
                >
                  {selectedContact.content}
                </a>
              ) : selectedContact.title === 'Email Us' ? (
                <a
                  href={`mailto:${selectedContact.content}`}
                  className="text-lg text-orange-600 underline mb-2 block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedContact.content}
                </a>
              ) : (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedContact.content)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-orange-600 underline mb-2 block"
                >
                  {selectedContact.content}
                </a>
              )}

              <p className="text-gray-600 dark:text-gray-400">{selectedContact.description}</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
