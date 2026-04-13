import { clientConfig } from '@/config';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const primaryPhone = clientConfig.contact?.primaryPhone ?? {
    href: 'tel:+8801917503580',
    display: '+৮৮০ ১৯১৭-৫০৩৫৮০',
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${clientConfig.theme.primary} 0%, ${clientConfig.theme.accent} 100%)`,
              }}
            >
              <span className="text-black font-bold text-lg sm:text-xl">{clientConfig.brand.initial}</span>
            </div>
            <div>
              <h1 className="text-sm sm:text-lg font-bold text-white leading-tight">{clientConfig.brand.name}</h1>
              <p className="text-[10px] sm:text-xs -mt-0.5 sm:-mt-1" style={{ color: clientConfig.theme.primary }}>
                {clientConfig.brand.descriptor}
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {clientConfig.navigation.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`nav-link text-sm font-medium transition-colors ${currentPage === link.id ? 'active' : 'text-zinc-300 hover:text-white'}`}
                style={currentPage === link.id ? { color: clientConfig.theme.primary } : undefined}
                data-testid={`nav-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={primaryPhone.href}
              className="flex items-center gap-2 text-zinc-400 hover:text-orange-400 transition-colors"
              data-testid="call-btn"
            >
              <Phone size={18} />
              <span className="text-sm">{primaryPhone.display}</span>
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('contact')}
              className="text-black font-bold px-5 py-2.5 rounded-lg btn-glow transition-all"
              style={{ backgroundColor: clientConfig.theme.primary }}
              data-testid="order-btn-nav"
            >
              {clientConfig.hero.orderCta}
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
              {clientConfig.navigation.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(link.id)}
                  className="text-2xl font-bold"
                  style={currentPage === link.id ? { color: clientConfig.theme.primary } : { color: '#fff' }}
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
                className="text-black font-bold px-8 py-3 rounded-lg mt-4"
                style={{ backgroundColor: clientConfig.theme.primary }}
                data-testid="mobile-order-btn"
              >
                {clientConfig.hero.orderCta}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
