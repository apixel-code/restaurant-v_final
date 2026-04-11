import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-white/5" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-xl flex items-center justify-center">
                <span className="text-black font-bold text-2xl">B</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">বার্গার হাউস</h3>
                <p className="text-sm text-orange-400">রেস্টুরেন্ট</p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              মুগদার বুকে আপনার প্রিয় ফাস্ট ফুড ডেস্টিনেশন। গরম, রসালো এবং মুখরোচক খাবারের নিশ্চয়তা।
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-black transition-all"
                data-testid="social-facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-black transition-all"
                data-testid="social-instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-black transition-all"
                data-testid="social-youtube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">দ্রুত লিংক</h4>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'হোম' },
                { id: 'menu', label: 'মেনু' },
                { id: 'blog', label: 'ব্লগ' },
                { id: 'contact', label: 'যোগাযোগ' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="footer-link text-sm hover:pl-2 transition-all"
                    data-testid={`footer-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">যোগাযোগ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-zinc-400 text-sm">
                  ৭৯/৮০, দক্ষিণ মুগদা, গার্মেন্টস গলি,<br />
                  দাদা ভিলা এপার্টমেন্ট, মুগদা
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange-400 flex-shrink-0" size={18} />
                <div className="text-zinc-400 text-sm">
                  <a href="tel:+8801917503580" className="hover:text-orange-400 transition-colors">
                    +৮৮০ ১৯১৭-৫০৩৫৮০
                  </a>
                  <br />
                  <a href="tel:+8801950496683" className="hover:text-orange-400 transition-colors">
                    +৮৮০ ১৯৫০-৪৯৬৬৮৩
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-orange-400 flex-shrink-0" size={18} />
                <span className="text-zinc-400 text-sm">
                  সকাল ১০টা - রাত ১১টা<br />
                  (প্রতিদিন খোলা)
                </span>
              </li>
            </ul>
          </div>

          {/* Order CTA */}
          <div>
            <h4 className="text-white font-bold mb-6">অর্ডার করুন</h4>
            <p className="text-zinc-400 text-sm mb-6">
              গরম গরম সুস্বাদু খাবার এখনই অর্ডার করুন। দ্রুত ডেলিভারি নিশ্চিত।
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('contact')}
              className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 rounded-lg btn-glow transition-all"
              data-testid="footer-order-btn"
            >
              এখনই অর্ডার করুন
            </motion.button>
            <a
              href="https://wa.me/8801917503580"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full border border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
              data-testid="footer-whatsapp-btn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp এ অর্ডার
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm text-center md:text-left">
            © {currentYear} বার্গার হাউস রেস্টুরেন্ট। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-zinc-600 text-xs">
            মুগদার সেরা ফাস্ট ফুড ডেস্টিনেশন
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
