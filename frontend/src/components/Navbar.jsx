import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'হোম' },
    { id: 'menu', label: 'মেনু' },
    { id: 'blog', label: 'ব্লগ' },
    { id: 'contact', label: 'যোগাযোগ' },
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-3' : 'bg-transparent py-5'
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer"
            onClick={() => handleNavClick('home')}
            data-testid="logo"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-black font-bold text-lg sm:text-xl">B</span>
            </div>
            <div>
              <h1 className="text-sm sm:text-lg font-bold text-white leading-tight">বার্গার হাউস</h1>
              <p className="text-[10px] sm:text-xs text-orange-400 -mt-0.5 sm:-mt-1">রেস্টুরেন্ট</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`nav-link text-sm font-medium transition-colors ${
                  currentPage === link.id ? 'text-orange-400 active' : 'text-zinc-300 hover:text-white'
                }`}
                data-testid={`nav-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+8801917503580"
              className="flex items-center gap-2 text-zinc-400 hover:text-orange-400 transition-colors"
              data-testid="call-btn"
            >
              <Phone size={18} />
              <span className="text-sm">০১৯১৭-৫০৩৫৮০</span>
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-5 py-2.5 rounded-lg btn-glow transition-all"
              data-testid="order-btn-nav"
            >
              অর্ডার করুন
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-menu flex flex-col items-center justify-center"
            data-testid="mobile-menu"
          >
            <button
              className="absolute top-5 right-6 text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={28} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-2xl font-bold ${
                    currentPage === link.id ? 'text-orange-400' : 'text-white'
                  }`}
                  data-testid={`mobile-nav-${link.id}`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleNavClick('contact')}
                className="bg-orange-500 text-black font-bold px-8 py-3 rounded-lg mt-4"
                data-testid="mobile-order-btn"
              >
                অর্ডার করুন
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
