import { clientConfig } from '@/config';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Check,
    ChefHat,
    LogOut,
    Menu,
    Pencil,
    Plus,
    ShoppingBag,
    Trash2,
    Truck,
    UtensilsCrossed,
    X,
    XCircle
} from 'lucide-react';
import { useCallback, useEffect, useState } from 'react'; // useCallback যোগ করা হয়েছে
import toast from 'react-hot-toast';
import { getAuthHeaders, useAdmin } from '../context/AdminContext';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const AdminDashboard = () => {
  const { logout, checkAuth } = useAdmin();
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // fetchOrders কে useCallback দিয়ে র‍্যাপ করা হয়েছে যাতে Dependency এরর না আসে
  const fetchOrders = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/api/admin/orders`, { headers: getAuthHeaders() });
      setOrders(res.data);
    } catch (error) {
      if (error.response?.status === 401) {
        await checkAuth();
        return;
      }
      toast.error('অর্ডার লোড করতে সমস্যা হয়েছে');
    }
    setLoading(false);
  }, [checkAuth]);

  // fetchMenuItems কে useCallback দিয়ে র‍্যাপ করা হয়েছে
  const fetchMenuItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/api/menu`);
      setMenuItems(res.data);
    } catch (error) {
      toast.error('মেনু লোড করতে সমস্যা হয়েছে');
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (activeTab === 'orders') {
      fetchOrders();
    } else if (activeTab === 'menu') {
      fetchMenuItems();
    }
  }, [activeTab, fetchOrders, fetchMenuItems]); // এখানে ফাংশনগুলো যোগ করা হয়েছে

  const updateOrderStatus = async (orderId, status) => {
    try {
      await axios.put(
        `${API_URL}/api/admin/orders/${orderId}/status?status=${status}`,
        {},
        { headers: getAuthHeaders() }
      );
      toast.success(clientConfig.admin.statusUpdated);
      fetchOrders();
    } catch (error) {
      if (error.response?.status === 401) {
        await checkAuth();
        return;
      }
      toast.error(clientConfig.admin.statusUpdateFailed);
    }
  };

  const deleteOrder = async (orderId) => {
    if (!window.confirm(clientConfig.admin.orderDeleteConfirm)) return;
    try {
      await axios.delete(`${API_URL}/api/admin/orders/${orderId}`, { headers: getAuthHeaders() });
      toast.success(clientConfig.admin.orderDeleteSuccess);
      fetchOrders();
    } catch (error) {
      if (error.response?.status === 401) {
        await checkAuth();
        return;
      }
      toast.error(clientConfig.admin.orderDeleteFailure);
    }
  };

  const deleteMenuItem = async (itemId) => {
    if (!window.confirm(clientConfig.admin.menuDeleteConfirm)) return;
    try {
      await axios.delete(`${API_URL}/api/admin/menu/${itemId}`, { headers: getAuthHeaders() });
      toast.success(clientConfig.admin.menuDeleteSuccess);
      fetchMenuItems();
    } catch (error) {
      if (error.response?.status === 401) {
        await checkAuth();
        return;
      }
      toast.error(clientConfig.admin.menuDeleteFailure);
    }
  };

  const handleLogout = async () => {
    await logout();
    toast.success(clientConfig.admin.logoutSuccess);
  };

  const getStatusBadge = (status) => {
    const styles = {
      pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      confirmed: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      preparing: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      delivered: 'bg-green-500/20 text-green-400 border-green-500/30',
      cancelled: 'bg-red-500/20 text-red-400 border-red-500/30',
    };
    const labels = clientConfig.admin.statusLabels;
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${styles[status] || styles.pending}`}>
        {labels[status] || status}
      </span>
    );
  };

  const navItems = [
    { id: 'orders', label: clientConfig.admin.ordersTabLabel, icon: ShoppingBag },
    { id: 'menu', label: clientConfig.admin.menuTabLabel, icon: UtensilsCrossed },
  ];

  return (
    <div className="min-h-screen bg-black" data-testid="admin-dashboard">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-zinc-900 border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 text-zinc-400 hover:text-white"
            data-testid="mobile-sidebar-toggle"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${clientConfig.theme.primary} 0%, ${clientConfig.theme.accent} 100%)` }}
            >
              <span className="text-black font-bold">{clientConfig.brand.initial}</span>
            </div>
            <span className="font-bold text-white">{clientConfig.admin.dashboardSubtitle}</span>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="p-2 text-zinc-400 hover:text-red-400"
          data-testid="mobile-logout-btn"
        >
          <LogOut size={20} />
        </button>
      </div>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/60 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-zinc-900 border-r border-white/10 z-50 transform transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Logo */}
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${clientConfig.theme.primary} 0%, ${clientConfig.theme.accent} 100%)` }}
            >
              <span className="text-black font-bold text-xl">{clientConfig.brand.initial}</span>
            </div>
            <div>
              <h1 className="font-bold text-white">{clientConfig.admin.dashboardBrandLabel}</h1>
              <p className="text-xs text-zinc-500">{clientConfig.admin.dashboardSubtitle}</p>
            </div>
          </div>
        </div>

        {/* Nav Items */}
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === item.id
                  ? 'text-black'
                  : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                }`}
              style={activeTab === item.id ? { backgroundColor: clientConfig.theme.primary } : undefined}
              data-testid={`nav-${item.id}`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-red-500/10 hover:text-red-400 transition-all"
            data-testid="logout-btn"
          >
            <LogOut size={20} />
            <span className="font-medium">লগআউট</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0 min-h-screen">
        <div className="p-4 lg:p-6">
          {/* Header */}
          <div className="hidden lg:flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white">
              {activeTab === 'orders' ? clientConfig.admin.ordersHeader : clientConfig.admin.menuHeader}
            </h1>
            {activeTab === 'menu' && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setEditingItem(null);
                  setShowMenuModal(true);
                }}
                className="flex items-center gap-2 text-black font-bold px-4 py-2 rounded-lg"
                style={{ backgroundColor: clientConfig.theme.primary }}
                data-testid="add-menu-btn"
              >
                <Plus size={20} />
                {clientConfig.admin.addItemButton}
              </motion.button>
            )}
          </div>

          {/* Mobile Tab Header */}
          <div className="lg:hidden flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-white">
              {activeTab === 'orders' ? clientConfig.admin.ordersHeader : clientConfig.admin.menuHeader}
            </h1>
            {activeTab === 'menu' && (
              <button
                onClick={() => {
                  setEditingItem(null);
                  setShowMenuModal(true);
                }}
                className="flex items-center gap-1 text-black font-bold px-3 py-2 rounded-lg text-sm"
                style={{ backgroundColor: clientConfig.theme.primary }}
                data-testid="add-menu-btn-mobile"
              >
                <Plus size={18} />
                {clientConfig.admin.addItemMobileButton}
              </button>
            )}
          </div>

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              {loading ? (
                <div className="text-center py-12">
                  <div className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin mx-auto" style={{ borderColor: clientConfig.theme.primary, borderTopColor: 'transparent' }}></div>
                  <p className="text-zinc-400 mt-3">{clientConfig.admin.loadingText}</p>
                </div>
              ) : orders.length === 0 ? (
                <div className="text-center py-12 bg-zinc-900 rounded-xl border border-white/5">
                  <ShoppingBag className="mx-auto text-zinc-600 mb-3" size={48} />
                  <p className="text-zinc-400">{clientConfig.admin.emptyOrdersText}</p>
                </div>
              ) : (
                orders.map((order) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-zinc-900 rounded-xl border border-white/5 p-4 lg:p-5"
                    data-testid={`order-${order.id}`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-white">{order.name}</h3>
                          {getStatusBadge(order.status)}
                        </div>
                        <p className="text-zinc-400 text-sm mb-1">📞 {order.phone}</p>
                        <p className="text-zinc-400 text-sm mb-1">📍 {order.address}</p>
                        <p className="text-sm font-medium" style={{ color: clientConfig.theme.primary }}>🍕 {order.item}</p>
                        <p className="text-zinc-500 text-xs mt-2">
                          {new Date(order.created_at).toLocaleString('bn-BD')}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {order.status === 'pending' && (
                          <>
                            <button
                              onClick={() => updateOrderStatus(order.id, 'confirmed')}
                              className="flex items-center gap-1 bg-blue-500/20 text-blue-400 px-3 py-2 rounded-lg text-sm hover:bg-blue-500/30"
                              data-testid={`confirm-${order.id}`}
                            >
                              <Check size={16} /> {clientConfig.admin.orderActions.confirm}
                            </button>
                            <button
                              onClick={() => updateOrderStatus(order.id, 'cancelled')}
                              className="flex items-center gap-1 bg-red-500/20 text-red-400 px-3 py-2 rounded-lg text-sm hover:bg-red-500/30"
                              data-testid={`cancel-${order.id}`}
                            >
                              <XCircle size={16} /> {clientConfig.admin.orderActions.cancel}
                            </button>
                          </>
                        )}
                        {order.status === 'confirmed' && (
                          <button
                            onClick={() => updateOrderStatus(order.id, 'preparing')}
                            className="flex items-center gap-1 bg-purple-500/20 text-purple-400 px-3 py-2 rounded-lg text-sm hover:bg-purple-500/30"
                            data-testid={`preparing-${order.id}`}
                          >
                            <ChefHat size={16} /> {clientConfig.admin.orderActions.preparing}
                          </button>
                        )}
                        {order.status === 'preparing' && (
                          <button
                            onClick={() => updateOrderStatus(order.id, 'delivered')}
                            className="flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-2 rounded-lg text-sm hover:bg-green-500/30"
                            data-testid={`deliver-${order.id}`}
                          >
                            <Truck size={16} /> {clientConfig.admin.orderActions.delivered}
                          </button>
                        )}
                        <button
                          onClick={() => deleteOrder(order.id)}
                          className="flex items-center gap-1 bg-red-500/10 text-red-400 px-3 py-2 rounded-lg text-sm hover:bg-red-500/20 border border-red-500/20"
                          data-testid={`delete-order-${order.id}`}
                        >
                          <Trash2 size={16} /> {clientConfig.admin.orderActions.delete}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          )}

          {/* Menu Tab */}
          {activeTab === 'menu' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {loading ? (
                <div className="col-span-full text-center py-12">
                  <div className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin mx-auto" style={{ borderColor: clientConfig.theme.primary, borderTopColor: 'transparent' }}></div>
                  <p className="text-zinc-400 mt-3">{clientConfig.admin.loadingText}</p>
                </div>
              ) : menuItems.length === 0 ? (
                <div className="col-span-full text-center py-12 bg-zinc-900 rounded-xl border border-white/5">
                  <UtensilsCrossed className="mx-auto text-zinc-600 mb-3" size={48} />
                  <p className="text-zinc-400">{clientConfig.admin.emptyMenuText}</p>
                </div>
              ) : (
                menuItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-zinc-900 rounded-xl border border-white/5 overflow-hidden"
                    data-testid={`menu-item-${item.id}`}
                  >
                    <div className="h-32 bg-zinc-800 overflow-hidden">
                      <img
                        src={item.image || 'https://via.placeholder.com/300x150?text=No+Image'}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-bold text-white text-sm">{item.name}</h3>
                          <p className="text-sm font-medium" style={{ color: clientConfig.theme.primary }}>৳ {item.price}/-</p>
                        </div>
                        <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
                          {item.category === 'pizza' ? clientConfig.admin.menuModal.categoryOptions.pizza : item.category === 'pasta' ? clientConfig.admin.menuModal.categoryOptions.pasta : clientConfig.admin.menuModal.categoryOptions.setmenu}
                        </span>
                      </div>
                      <p className="text-zinc-500 text-xs mt-2 line-clamp-2">{item.description}</p>
                      <div className="flex gap-2 mt-3">
                        <button
                          onClick={() => {
                            setEditingItem(item);
                            setShowMenuModal(true);
                          }}
                          className="flex-1 flex items-center justify-center gap-1 bg-zinc-800 text-zinc-300 px-3 py-2 rounded-lg text-sm hover:bg-zinc-700"
                          data-testid={`edit-${item.id}`}
                        >
                          <Pencil size={14} /> এডিট
                        </button>
                        <button
                          onClick={() => deleteMenuItem(item.id)}
                          className="flex items-center justify-center gap-1 bg-red-500/20 text-red-400 px-3 py-2 rounded-lg text-sm hover:bg-red-500/30"
                          data-testid={`delete-${item.id}`}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          )}
        </div>
      </main>

      {/* Menu Modal */}
      <MenuModal
        isOpen={showMenuModal}
        onClose={() => {
          setShowMenuModal(false);
          setEditingItem(null);
        }}
        editingItem={editingItem}
        onSuccess={fetchMenuItems}
      />
    </div>
  );
};

// Menu Modal Component
const MenuModal = ({ isOpen, onClose, editingItem, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'pizza',
    price: '',
    description: '',
    image: '',
    size: '',
    popular: false,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editingItem) {
      setFormData({
        name: editingItem.name || '',
        category: editingItem.category || 'pizza',
        price: editingItem.price || '',
        description: editingItem.description || '',
        image: editingItem.image || '',
        size: editingItem.size || '',
        popular: editingItem.popular || false,
      });
    } else {
      setFormData({
        name: '',
        category: 'pizza',
        price: '',
        description: '',
        image: '',
        size: '',
        popular: false,
      });
    }
  }, [editingItem, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) {
      toast.error(clientConfig.admin.menuModal.validationError);
      return;
    }

    setLoading(true);
    try {
      if (editingItem) {
        await axios.put(
          `${API_URL}/api/admin/menu/${editingItem.id}`,
          formData,
          { headers: getAuthHeaders() }
        );
        toast.success(clientConfig.admin.menuModal.successEdit);
      } else {
        await axios.post(
          `${API_URL}/api/admin/menu`,
          formData,
          { headers: getAuthHeaders() }
        );
        toast.success(clientConfig.admin.menuModal.successNew);
      }
      onSuccess();
      onClose();
    } catch (error) {
      toast.error(clientConfig.admin.menuModal.error);
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-zinc-900 rounded-2xl border border-white/10 w-full max-w-md max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 sticky top-0 bg-zinc-900">
          <h2 className="text-lg font-bold text-white">
            {editingItem ? clientConfig.admin.menuModal.editTitle : clientConfig.admin.menuModal.addTitle}
          </h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-zinc-400 text-sm mb-1">{clientConfig.admin.menuModal.nameLabel}</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500"
              placeholder={clientConfig.admin.menuModal.namePlaceholder}
              data-testid="menu-name-input"
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-1">{clientConfig.admin.menuModal.categoryLabel}</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500"
              data-testid="menu-category-select"
            >
              <option value="pizza">{clientConfig.admin.menuModal.categoryOptions.pizza}</option>
              <option value="pasta">{clientConfig.admin.menuModal.categoryOptions.pasta}</option>
              <option value="setmenu">{clientConfig.admin.menuModal.categoryOptions.setmenu}</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-zinc-400 text-sm mb-1">{clientConfig.admin.menuModal.priceLabel}</label>
              <input
                type="text"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500"
                placeholder={clientConfig.admin.menuModal.pricePlaceholder}
                data-testid="menu-price-input"
              />
            </div>
            <div>
              <label className="block text-zinc-400 text-sm mb-1">{clientConfig.admin.menuModal.sizeLabel}</label>
              <input
                type="text"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500"
                placeholder={clientConfig.admin.menuModal.sizePlaceholder}
                data-testid="menu-size-input"
              />
            </div>
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-1">{clientConfig.admin.menuModal.descriptionLabel}</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 resize-none"
              rows={2}
              placeholder={clientConfig.admin.menuModal.descriptionPlaceholder}
              data-testid="menu-description-input"
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-1">{clientConfig.admin.menuModal.imageLabel}</label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500"
              placeholder={clientConfig.admin.menuModal.imagePlaceholder}
              data-testid="menu-image-input"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="popular"
              checked={formData.popular}
              onChange={(e) => setFormData({ ...formData, popular: e.target.checked })}
              className="w-4 h-4 accent-orange-500"
              data-testid="menu-popular-checkbox"
            />
            <label htmlFor="popular" className="text-zinc-300 text-sm">{clientConfig.admin.menuModal.popularLabel}</label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-bold transition-all ${loading
                ? 'bg-zinc-700 text-zinc-400'
                : 'text-black'
              }`}
            style={loading ? undefined : { backgroundColor: clientConfig.theme.primary }}
            data-testid="menu-submit-btn"
          >
            {loading ? clientConfig.admin.menuModal.submitting : editingItem ? clientConfig.admin.menuModal.submitEdit : clientConfig.admin.menuModal.submitNew}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;