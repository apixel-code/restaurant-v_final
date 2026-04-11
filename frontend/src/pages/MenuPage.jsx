import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Flame } from 'lucide-react';

const MenuPage = ({ setCurrentPage }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'সব আইটেম' },
    { id: 'pizza', label: 'পিৎজা' },
    { id: 'pasta', label: 'চাউমিন/পাস্তা' },
    { id: 'setmenu', label: 'সেট মেনু' },
  ];

  const menuItems = [
    // Pizza
    {
      id: 1,
      category: 'pizza',
      name: 'চিকেন পিৎজা রেগুলার',
      size: '৭" - ৯"',
      price: '১৫০ - ২০০',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80',
      description: 'রসালো চিকেন, মোজারেলা চিজ এবং স্পেশাল সস',
      popular: true,
    },
    {
      id: 2,
      category: 'pizza',
      name: 'সস পিৎজা',
      size: '৭" - ৯"',
      price: '১৫০ - ২০০',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80',
      description: 'টম্যাটো সস, হার্ব এবং গলানো চিজ',
      popular: false,
    },
    {
      id: 3,
      category: 'pizza',
      name: 'মাশরুম পিৎজা',
      size: '৭" - ৯"',
      price: '১৫০ - ২০০',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80',
      description: 'ফ্রেশ মাশরুম, চিজ এবং ইতালিয়ান হার্ব',
      popular: false,
    },
    {
      id: 4,
      category: 'pizza',
      name: 'ওভারলোড চিকেন পিৎজা',
      size: '৭" - ৯"',
      price: '২০০ - ২৫০',
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80',
      description: 'এক্সট্রা চিকেন, ডবল চিজ এবং লোডেড টপিংস',
      popular: true,
    },
    // Pasta/Chawmin
    {
      id: 5,
      category: 'pasta',
      name: 'এগ নুডলস',
      size: '',
      price: '৭০',
      image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80',
      description: 'ডিম দিয়ে তৈরি সুস্বাদু নুডলস',
      popular: false,
    },
    {
      id: 6,
      category: 'pasta',
      name: 'চিকেন নুডলস',
      size: '',
      price: '১০০',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80',
      description: 'টেন্ডার চিকেন পিস সহ নুডলস',
      popular: true,
    },
    {
      id: 7,
      category: 'pasta',
      name: 'পাস্তা রেগুলার',
      size: '',
      price: '৭০',
      image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80',
      description: 'ক্লাসিক ইতালিয়ান স্টাইল পাস্তা',
      popular: false,
    },
    {
      id: 8,
      category: 'pasta',
      name: 'চিকেন পাস্তা',
      size: '',
      price: '১০০',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80',
      description: 'ক্রিমি সস এবং গ্রিলড চিকেন',
      popular: true,
    },
    {
      id: 9,
      category: 'pasta',
      name: 'চিজ পাস্তা',
      size: '',
      price: '১৫০',
      image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80',
      description: 'এক্সট্রা চিজি এবং ক্রিমি',
      popular: true,
    },
    // Set Menu
    {
      id: 10,
      category: 'setmenu',
      name: 'ফ্রাইড রাইস + ক্রিসপি চিকেন',
      size: '',
      price: '১৩০',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80',
      description: 'গরম ফ্রাইড রাইস এবং ক্রিসপি ফ্রাইড চিকেন',
      popular: true,
    },
    {
      id: 11,
      category: 'setmenu',
      name: 'ফ্রাইড রাইস + চিকেন কারি',
      size: '',
      price: '১৩০',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80',
      description: 'ফ্রাইড রাইস এবং ঝাল চিকেন কারি',
      popular: false,
    },
    {
      id: 12,
      category: 'setmenu',
      name: 'ফ্রাইড রাইস + ক্রিসপি চিকেন + কারি',
      size: '',
      price: '২০০',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80',
      description: 'কমপ্লিট মিল - ভাত, চিকেন এবং কারি',
      popular: true,
    },
  ];

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
              📞 অর্ডার করতে কল করুন: <a href="tel:+8801917503580" className="text-orange-400 font-medium">+৮৮০ ১৯১৭-৫০৩৫৮০</a>
              {' '} অথবা {' '}
              <a href="tel:+8801950496683" className="text-orange-400 font-medium">+৮৮০ ১৯৫০-৪৯৬৬৮৩</a>
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
