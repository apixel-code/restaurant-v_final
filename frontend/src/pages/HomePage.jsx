import { clientConfig } from '@/config';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, Star, Utensils } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => {
  const featuredItems = clientConfig.home.featuredItems;

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  const handleOrderClick = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMenuClick = () => {
    setCurrentPage('menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-4.1.0&auto=format&fit=crop&w=2000&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8"
                style={{
                  backgroundColor: 'rgba(255, 159, 28, 0.2)',
                  border: `1px solid color-mix(in srgb, ${clientConfig.theme.primary} 30%, transparent)`,
                }}
            >
                <Flame style={{ color: clientConfig.theme.primary }} size={18} />
                <span className="text-sm font-medium" style={{ color: clientConfig.theme.primary }}>
                  {clientConfig.hero.badge}
                </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                {clientConfig.hero.headlineTop}
              <br />
                <span className="text-gradient">{clientConfig.hero.headlineBottom}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                {clientConfig.hero.subheadlinePrefix}
                <span className="font-semibold" style={{ color: clientConfig.theme.primary }}>
                  {' '}{clientConfig.hero.subheadlineBrand}{' '}
                </span>
                {clientConfig.hero.subheadlineSuffix}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleMenuClick}
                className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
                data-testid="hero-menu-btn"
              >
                <Utensils size={20} />
                {clientConfig.hero.menuCta}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOrderClick}
                className="px-8 py-4 text-black font-bold rounded-lg btn-glow transition-all flex items-center gap-2"
                style={{ backgroundColor: clientConfig.theme.primary }}
                data-testid="hero-order-btn"
              >
                {clientConfig.hero.orderCta}
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-orange-400 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 sm:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
              <span className="font-medium uppercase tracking-wider text-sm" style={{ color: clientConfig.theme.primary }}>
                {clientConfig.home.featuredSectionLabel}
              </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
              {clientConfig.home.featuredSectionTitle}
            </h2>
            <div className="section-divider mx-auto"></div>
          </motion.div>

          {/* Featured Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="menu-card group cursor-pointer"
                data-testid={`featured-item-${item.id}`}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  {/* Badge */}
                      <span className="absolute top-4 left-4 text-black text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: clientConfig.theme.primary }}>
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-zinc-400 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="price-tag">৳ {item.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleOrderClick}
                      className="font-medium text-sm hover:text-orange-300 flex items-center gap-1"
                      style={{ color: clientConfig.theme.primary }}
                      data-testid={`order-item-${item.id}`}
                    >
                      {clientConfig.home.orderButton}
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div {...fadeUp} className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleMenuClick}
              className="px-8 py-4 border-2 font-bold rounded-lg transition-all"
              style={{ borderColor: clientConfig.theme.primary, color: clientConfig.theme.primary }}
              data-testid="view-all-menu-btn"
            >
              {clientConfig.home.viewAllButton}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="font-medium uppercase tracking-wider text-sm" style={{ color: clientConfig.theme.primary }}>
              {clientConfig.home.whyChooseSectionLabel}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
              {clientConfig.home.whyChooseSectionTitle}
            </h2>
            <div className="section-divider mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientConfig.home.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-8 bg-zinc-900 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all"
                data-testid={`feature-${index}`}
              >
                <span className="text-5xl mb-6 block">{feature.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              {clientConfig.home.ctaTitle}
            </h2>
            <p className="text-black/70 text-lg mb-8">
              {clientConfig.home.ctaText}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOrderClick}
              className="px-10 py-4 bg-black text-white font-bold rounded-lg hover:bg-zinc-900 transition-all"
              data-testid="cta-order-btn"
            >
              {clientConfig.home.ctaButton}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
