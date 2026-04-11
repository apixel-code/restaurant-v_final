import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAdmin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password) {
      setError('পাসওয়ার্ড দিন');
      return;
    }
    
    setLoading(true);
    setError('');
    
    const result = await login(password);
    
    if (!result.success) {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4" data-testid="admin-login-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-black font-bold text-3xl">B</span>
          </div>
          <h1 className="text-2xl font-bold text-white">বার্গার হাউস</h1>
          <p className="text-zinc-400 text-sm mt-1">অ্যাডমিন প্যানেল</p>
        </div>

        {/* Login Card */}
        <div className="bg-zinc-900 rounded-2xl p-6 border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm"
                data-testid="login-error"
              >
                <AlertCircle size={18} />
                {error}
              </motion.div>
            )}

            {/* Password Field */}
            <div>
              <label className="block text-zinc-400 text-sm mb-2">পাসওয়ার্ড</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="পাসওয়ার্ড লিখুন"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl pl-12 pr-12 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
                  data-testid="admin-password-input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className={`w-full py-3.5 rounded-xl font-bold text-lg transition-all ${
                loading
                  ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
                  : 'bg-orange-500 text-black hover:bg-orange-600'
              }`}
              data-testid="admin-login-btn"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin"></div>
                  লগইন হচ্ছে...
                </div>
              ) : (
                'লগইন করুন'
              )}
            </motion.button>
          </form>
        </div>

        {/* Back to Website */}
        <p className="text-center mt-6">
          <a href="/" className="text-zinc-500 text-sm hover:text-orange-400 transition-colors">
            ← ওয়েবসাইটে ফিরে যান
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
