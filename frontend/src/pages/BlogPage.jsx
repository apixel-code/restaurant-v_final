import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'কেন চিজ দেখলে আমাদের ব্রেইন পাগল হয়ে যায়?',
      excerpt: 'চিজের ভেতরে থাকা ক্যাসোমরফিন নামক একটি যৌগ আমাদের মস্তিষ্কে ডোপামিন রিলিজ করে। এই কারণেই গলানো চিজ দেখলে আমরা নিজেদের সামলাতে পারি না। জানুন বিজ্ঞানের পেছনের গল্প...',
      image: 'https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
      date: '১৫ জানুয়ারি, ২০২৬',
      readTime: '৫ মিনিট',
      author: 'বার্গার হাউস টিম',
      category: 'খাবারের বিজ্ঞান',
    },
    {
      id: 2,
      title: 'অফিসের স্ট্রেস কাটানোর সবচেয়ে সহজ উপায়: এক প্লেট গরম পাস্তা!',
      excerpt: 'সারাদিন কাজের চাপে যখন মাথা ঘোরে, তখন এক প্লেট ধোঁয়া ওঠা পাস্তা হতে পারে আপনার সেরা বন্ধু। কার্বোহাইড্রেট কীভাবে মুড ভালো করে, জানুন বিস্তারিত...',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
      date: '১০ জানুয়ারি, ২০২৬',
      readTime: '৪ মিনিট',
      author: 'বার্গার হাউস টিম',
      category: 'লাইফস্টাইল',
    },
    {
      id: 3,
      title: 'মুগদার খাবার সংস্কৃতি: আমাদের গর্ব, আমাদের স্বাদ',
      excerpt: 'মুগদা এলাকায় খাবারের প্রতি মানুষের ভালোবাসা অন্যরকম। এখানকার প্রতিটি পরিবারে আছে নিজস্ব রান্নার ঐতিহ্য। বার্গার হাউস সেই ঐতিহ্যকে আধুনিকতার সাথে মিশিয়েছে...',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
      date: '৫ জানুয়ারি, ২০২৬',
      readTime: '৬ মিনিট',
      author: 'বার্গার হাউস টিম',
      category: 'আমাদের গল্প',
    },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.5, ease: 'easeOut' },
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16" data-testid="blog-page">
      {/* Header */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-orange-400 font-medium uppercase tracking-wider text-sm">আমাদের ব্লগ</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 mb-4">
              খাবার নিয়ে <span className="text-gradient">গল্প</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              খাবার শুধু খাওয়া নয়, এর পেছনে আছে বিজ্ঞান, সংস্কৃতি এবং অনেক মজার তথ্য
            </p>
            <div className="section-divider mx-auto mt-6"></div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Post - Large */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 blog-card group cursor-pointer"
              data-testid="blog-post-featured"
            >
              <div className="relative h-72 sm:h-96 overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="inline-block bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {blogPosts[0].category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-zinc-300 text-sm sm:text-base mb-4 line-clamp-2">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-zinc-400 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Side Posts */}
            <div className="space-y-6">
              {blogPosts.slice(1).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="blog-card group cursor-pointer"
                  data-testid={`blog-post-${post.id}`}
                >
                  <div className="flex flex-col sm:flex-row lg:flex-col">
                    <div className="relative h-48 sm:h-32 lg:h-40 sm:w-48 lg:w-full overflow-hidden flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover img-zoom"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-zinc-800/90 text-orange-400 text-xs font-medium px-2 py-1 rounded">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-3 text-zinc-500 text-xs">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            {...fadeUp}
            className="mt-20 bg-zinc-900 rounded-2xl p-8 sm:p-12 text-center border border-white/5"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              নতুন আপডেট পেতে চান?
            </h3>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
              আমাদের নতুন অফার, মেনু আপডেট এবং খাবার নিয়ে মজার তথ্য সবার আগে পেতে সাবস্ক্রাইব করুন
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="আপনার ইমেইল লিখুন"
                className="form-input flex-1"
                data-testid="newsletter-email"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-3 rounded-lg transition-all"
                data-testid="newsletter-submit"
              >
                সাবস্ক্রাইব
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
