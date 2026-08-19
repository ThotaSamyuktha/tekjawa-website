// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   Facebook,
//   Linkedin,
//   Youtube,
// } from 'lucide-react';

// import Logo from '@/assets/logo.avif';

// const Footer = () => {
//   return (
//     <motion.footer
//       className="bg-[#0b1120] text-white py-10 px-4"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//     >
//       <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-y-10 gap-x-6">

//         {/* Logo + Description */}
//         <div className="w-full sm:w-[45%] md:w-[22%] space-y-3">
//           <div className="flex items-center space-x-3">
//             <img
//               src={Logo}
//               alt="Tekjawa Solar Logo"
//               className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
//             />
//             <span className="text-lg font-semibold">Tekjawa Solar</span>
//           </div>
//           <p className="text-sm text-gray-400">Leading Solar Provider in India</p>
//           <div className="flex space-x-3 pt-3">
//             <a href="https://www.facebook.com/profile.php?id=100064940381744" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-700 rounded-full hover:bg-indigo-500 transition">
//               <Facebook className="w-4 h-4" />
//             </a>
//             <a href="https://www.linkedin.com/company/tekjawa/" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-700 rounded-full hover:bg-blue-700 transition">
//               <Linkedin className="w-4 h-4" />
//             </a>
//             <a href="https://youtube.com/@tekjawa?si=M4lAXRduwm6PSmSl" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-700 rounded-full hover:bg-red-600 transition">
//               <Youtube className="w-4 h-4" />
//             </a>
//           </div>
//         </div>

//         {/* Company Links */}
//         <div className="w-full sm:w-[45%] md:w-[22%]">
//           <h3 className="text-sm font-semibold text-white mb-3">Company</h3>
//           <ul className="text-gray-400 space-y-2 text-sm">
//             <li><a href="#about" className="hover:text-white">About us</a></li>
//             <li><a href="#services" className="hover:text-white">Services</a></li>
//             <li><a href="#subsidy" className="hover:text-white">Estimate</a></li>
//             <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
//           </ul>
//         </div>

//         {/* Useful Links */}
//         <div className="w-full sm:w-[45%] md:w-[22%]">
//           <h3 className="text-sm font-semibold text-white mb-3">Useful Links</h3>
//           <ul className="text-gray-400 space-y-2 text-sm">
//             <li><a href="https://forms.gle/nr9He2m6vYstosrSA" className="hover:text-white">Get a Quote</a></li>
//             <li><a href="https://forms.gle/nr9He2m6vYstosrSA" className="hover:text-white">Book Consultation</a></li>
//           </ul>
//         </div>

//         {/* ✅ Contact Info */}
//         <div className="w-full sm:w-[45%] md:w-[22%]">
//           <h3 className="text-sm font-semibold text-white mb-3">Contact</h3>
//           <ul className="text-gray-400 space-y-2 text-sm">
//             <li><strong>Phone:</strong> <a href="tel:+918297863593" className="hover:text-white">+91 82978 63593</a></li>
//             <li><strong>Email:</strong> <a href="mailto:team@tekjawa.com" className="hover:text-white">team@tekjawa.com</a></li>
//             <li>
//               <strong>Address:</strong>
//               <p className="mt-1">
//                 <a
//                   href="https://www.google.com/maps/search/?api=1&query=17-83-2%2C+Lane+2%2C+Vijaya+Residency%2C+Kamala+Nagar%2C+Dilsukhnagar%2C+Hyderabad%2C+Telangana+500060"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-white "
//                 >
//                   17-83-2, Lane 2, Vijaya Residency,<br />
//                   Kamala Nagar, Dilsukhnagar,<br />
//                   Hyderabad, Telangana – 500060
//                 </a>
//               </p>
//             </li>
//           </ul>
//         </div>

//         {/* Copyright */}
//         <div className="w-full text-center pt-8 border-t border-gray-700 mt-8 text-sm text-gray-500">
//           © 2025 Tekjawa Solar. AWAGOJARES SOLUTIONS PRIVATE LIMITED
//         </div>
//       </div>
//     </motion.footer>
//   );
// };

// export default Footer;
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Youtube } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

import Logo from '@/assets/logo.avif';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (hash) => {
    if (location.pathname === '/') {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/${hash}`); // Navigates to /#services or /#contact
    }
  };

  return (
    <motion.footer
      className="bg-[#0b1120] text-white py-10 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-y-10 gap-x-6">
        {/* Logo + Description */}
        <div className="w-full sm:w-[45%] md:w-[22%] space-y-3">
          <div className="flex items-center space-x-3">
            <img
              src={Logo}
              alt="Tekjawa Solar Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <span className="text-lg font-semibold">Tekjawa Solar</span>
          </div>
          <p className="text-sm text-gray-400">Leading Solar Provider in India</p>
          <div className="flex space-x-3 pt-3">
            <a href="https://www.facebook.com/profile.php?id=100064940381744" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-700 rounded-full hover:bg-indigo-500 transition">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/tekjawa/" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-700 rounded-full hover:bg-blue-700 transition">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://youtube.com/@tekjawa?si=M4lAXRduwm6PSmSl" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-700 rounded-full hover:bg-red-600 transition">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="w-full sm:w-[45%] md:w-[22%]">
          <h3 className="text-sm font-semibold text-white mb-3">Company</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>
              <button onClick={() => handleSectionClick('#about')} className="hover:text-white">
                About us
              </button>
            </li>
            <li>
              <button onClick={() => handleSectionClick('#services')} className="hover:text-white">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => handleSectionClick('#subsidy')} className="hover:text-white">
                Estimate
              </button>
            </li>
            <li>
              <button onClick={() => handleSectionClick('#contact')} className="hover:text-white">
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="w-full sm:w-[45%] md:w-[22%]">
          <h3 className="text-sm font-semibold text-white mb-3">Useful Links</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>
              <a href="https://forms.gle/nr9He2m6vYstosrSA" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Get a Quote
              </a>
            </li>
            <li>
              <a href="https://forms.gle/nr9He2m6vYstosrSA" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Book Consultation
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full sm:w-[45%] md:w-[22%]">
          <h3 className="text-sm font-semibold text-white mb-3">Contact</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>
              <strong>Phone:</strong>{' '}
              <a href="tel:+918297863593" className="hover:text-white">+91 82978 63593</a>
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:team@tekjawa.com" className="hover:text-white">team@tekjawa.com</a>
            </li>
            <li>
              <strong>Address:</strong>
              <p className="mt-1">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=17-83-2%2C+Lane+2%2C+Vijaya+Residency%2C+Kamala+Nagar%2C+Dilsukhnagar%2C+Hyderabad%2C+Telangana+500060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  17-83-2, Lane 2, Vijaya Residency,<br />
                  Kamala Nagar, Dilsukhnagar,<br />
                  Hyderabad, Telangana – 500060
                </a>
              </p>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="w-full text-center pt-8 border-t border-gray-700 mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Tekjawa Solar. AWAGOJARES SOLUTIONS PRIVATE LIMITED
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
