import { clientConfig } from '@/config';
import { motion } from 'framer-motion';
import { Flame, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

const MenuPage = ({ setCurrentPage }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = clientConfig.menu.categories;
  const menuItems = clientConfig.menu.items;
  const contact = clientConfig.contact ?? {};
  const primaryPhone = contact.primaryPhone ?? {
    href: 'tel:+8801917503580',
    display: '+৮৮০ ১৯১৭-৫০৩৫৮০',
  };
  const secondaryPhone = contact.secondaryPhone ?? {
    href: 'tel:+8801950496683',
    display: '+৮৮০ ১৯৫০-৪৯৬৬৮৩',
  };

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const handleOrderClick = (itemName) => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.5, ease: 'easeOut' },
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16" data-testid="menu-page">
      {/* Header */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-orange-400 font-medium uppercase tracking-wider text-sm">সুস্বাদু খাবার</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 mb-4">
              আমাদের <span className="text-gradient">মেনু</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              মুগদার সেরা স্বাদ - প্রতিটি আইটেম তাজা উপকরণ দিয়ে ভালোবাসা সহকারে তৈরি
            </p>
            <div className="section-divider mx-auto mt-6"></div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                data-testid={`category-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="menu-card group"
                data-testid={`menu-item-${item.id}`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  {item.popular && (
                    <span className="absolute top-3 left-3 bg-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <Flame size={12} />
                      জনপ্রিয়
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                  {item.size && (
                    <span className="text-zinc-500 text-xs">({item.size})</span>
                  )}
                  <p className="text-zinc-400 text-sm mt-2 mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="price-tag text-sm">৳ {item.price}/-</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleOrderClick(item.name)}
                      className="flex items-center gap-1 bg-zinc-800 hover:bg-orange-500 hover:text-black text-white px-3 py-2 rounded-lg text-sm font-medium transition-all"
                      data-testid={`order-btn-${item.id}`}
                    >
                      <ShoppingBag size={14} />
                      অর্ডার
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Note */}
      <section className="py-12 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-zinc-400 text-sm">
              {clientConfig.menu.specialNotePrefix} <a href={primaryPhone.href} className="font-medium" style={{ color: clientConfig.theme.primary }}>{primaryPhone.display}</a>
              {' '} অথবা {' '}
              <a href={secondaryPhone.href} className="font-medium" style={{ color: clientConfig.theme.primary }}>{secondaryPhone.display}</a>
            </p>
            <p className="text-zinc-500 text-xs mt-2">
              * দাম পরিবর্তনশীল। সাইজ অনুযায়ী দাম ভিন্ন হতে পারে।
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
