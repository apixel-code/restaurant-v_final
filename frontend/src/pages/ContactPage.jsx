import { clientConfig } from '@/config';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Send, ShoppingBag, User } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const ContactPage = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    item: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address || !formData.item) {
      toast.error(clientConfig.contact.validationMessage, {
        style: {
          background: clientConfig.theme.surfaceAlt,
          color: '#fff',
          border: '1px solid rgba(239, 68, 68, 0.3)',
        },
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit order to backend
      await axios.post(`${API_URL}/api/orders`, formData);
      
      toast.success(clientConfig.contact.successMessage, {
        duration: 4000,
        style: {
          background: clientConfig.theme.surfaceAlt,
          color: '#fff',
          border: `1px solid ${clientConfig.theme.borderDefault}`,
        },
        icon: '🔥',
      });

      // Reset form
      setFormData({ name: '', phone: '', address: '', item: '' });
      setIsSubmitting(false);

      // Redirect to home after 2 seconds
      setTimeout(() => {
        setCurrentPage('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, clientConfig.contact.redirectDelayMs);
    } catch (error) {
      toast.error(clientConfig.contact.errorMessage, {
        style: {
          background: clientConfig.theme.surfaceAlt,
          color: '#fff',
          border: '1px solid rgba(239, 68, 68, 0.3)',
        },
      });
      setIsSubmitting(false);
    }
  };

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.5, ease: 'easeOut' },
  };

  const contactInfo = clientConfig.contact.infoCards;

  return (
    <div className="min-h-screen bg-black pt-24 pb-16" data-testid="contact-page">
      {/* Header */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="font-medium uppercase tracking-wider text-sm" style={{ color: clientConfig.theme.primary }}>
              {clientConfig.contact.headerLabel}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 mb-4">
              {clientConfig.contact.title} <span className="text-gradient">{clientConfig.contact.titleAccent}</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              {clientConfig.contact.subtitle}
            </p>
            <div className="section-divider mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div {...fadeUp}>
              <div className="bg-zinc-900 rounded-2xl p-8 border border-white/5">
                <h2 className="text-2xl font-bold text-white mb-8">{clientConfig.contact.infoTitle}</h2>
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center flex-shrink-0">
                        {index === 0 && <MapPin style={{ color: clientConfig.theme.primary }} size={24} />}
                        {index === 1 && <Phone style={{ color: clientConfig.theme.primary }} size={24} />}
                        {index === 2 && <Clock style={{ color: clientConfig.theme.primary }} size={24} />}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          info.links ? (
                            <a
                              key={i}
                              href={info.links[i]}
                              className="block text-zinc-400 hover:text-orange-400 transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            <p key={i} className="text-zinc-400">{detail}</p>
                          )
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={clientConfig.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all"
                  style={{ backgroundColor: clientConfig.theme.success }}
                  data-testid="whatsapp-order-btn"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {clientConfig.contact.whatsappCta}
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="mt-6 bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 h-64">
                <iframe
                  src={clientConfig.contact.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={clientConfig.contact.mapTitle}
                ></iframe>
              </div>
            </motion.div>

            {/* Order Form */}
            <motion.div {...fadeUp}>
              <div className="bg-zinc-900 rounded-2xl p-8 border border-white/5">
                <h2 className="text-2xl font-bold text-white mb-2">{clientConfig.contact.orderFormTitle}</h2>
                <p className="text-zinc-400 text-sm mb-8">{clientConfig.contact.orderFormSubtitle}</p>

                <form onSubmit={handleSubmit} className="space-y-6" data-testid="order-form">
                  {/* Name */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      {clientConfig.contact.formLabels.name}
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={clientConfig.contact.formPlaceholders.name}
                        className="form-input with-icon"
                        data-testid="input-name"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      {clientConfig.contact.formLabels.phone}
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={clientConfig.contact.formPlaceholders.phone}
                        className="form-input with-icon"
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      {clientConfig.contact.formLabels.address}
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-4 text-zinc-500" size={18} />
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder={clientConfig.contact.formPlaceholders.address}
                        rows={3}
                        className="form-input with-icon-textarea resize-none"
                        data-testid="input-address"
                      />
                    </div>
                  </div>

                  {/* Item */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      {clientConfig.contact.formLabels.item}
                    </label>
                    <div className="relative">
                      <ShoppingBag className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                      <input
                        type="text"
                        name="item"
                        value={formData.item}
                        onChange={handleInputChange}
                        placeholder={clientConfig.contact.formPlaceholders.item}
                        className="form-input with-icon"
                        data-testid="input-item"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                      isSubmitting 
                        ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed' 
                        : 'bg-orange-500 hover:bg-orange-600 text-black btn-glow'
                    }`}
                    data-testid="submit-order-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin"></div>
                        {clientConfig.contact.processingText}
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        {clientConfig.contact.confirmText}
                      </>
                    )}
                  </motion.button>
                </form>

                <p className="text-zinc-500 text-xs text-center mt-6">
                  {clientConfig.contact.submitNote}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
