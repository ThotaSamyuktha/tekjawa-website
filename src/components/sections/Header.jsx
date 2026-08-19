import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/assets/logo.avif';
import { useNavigate } from 'react-router-dom';

const Header = ({ handleQuoteClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', path: '/#hero' },
    { label: 'Services', path: '/#services' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/learnmore' },
    { label: 'Contact', path: '/#contact' },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-md border-b border-brand-orange font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3 h-full">
          <img
            src={Logo}
            alt="Logo"
            className="max-h-full w-auto h-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-3">
          {navLinks.map((link) => (
  <button
    key={link.label}
    onClick={() => handleNavClick(link.path)}
    className="text-sm sm:text-base text-brand-blue hover:text-white font-semibold rounded-full px-3 sm:px-4 py-1.5 transition transform hover:scale-105 hover:bg-brand-orange"
  >
    {link.label}
  </button>
))}

<Button
  onClick={handleQuoteClick}
  className="bg-brand-orange text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-brand-blue hover:text-white hover:opacity-100 hover:scale-105 transition"
>
  Get Quote
</Button>

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-4 pb-4">
          {navLinks.map((link) => (
  <button
    key={link.label}
    onClick={() => handleNavClick(link.path)}
    className="w-full text-left bg-white border hover:bg-[#f47820] text-[#0077c2] hover:text-white font-medium px-4 py-2 rounded-md"
  >
    {link.label}
  </button>
))}

<Button
  onClick={() => {
    handleQuoteClick();
    setIsMobileMenuOpen(false);
  }}
  className="bg-gradient-to-r from-[#fdb913] via-[#f47820] to-[#fdb913] text-black font-semibold px-4 py-2 w-full rounded-md shadow hover:opacity-90"
>
  Get Quote
</Button>

        </div>
      )}
    </motion.nav>
  );
};

export default Header;
