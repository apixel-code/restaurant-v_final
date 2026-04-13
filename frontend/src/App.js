import '@/App.css';
import { clientConfig } from '@/config';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

// Components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';

// Context
import { AdminProvider, useAdmin } from './context/AdminContext';

// Admin Protected Route
const AdminRoute = () => {
  const { isAuthenticated, loading } = useAdmin();

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div
            className="w-10 h-10 border-2 border-t-transparent rounded-full animate-spin mx-auto"
            style={{ borderColor: clientConfig.theme.primary, borderTopColor: 'transparent' }}
          ></div>
          <p className="text-zinc-400 mt-4">{clientConfig.admin.loadingText}</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return <AdminDashboard />;
};

// Main App Content
const AppContent = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bg-primary', clientConfig.theme.background);
    root.style.setProperty('--bg-secondary', clientConfig.theme.surface);
    root.style.setProperty('--bg-tertiary', clientConfig.theme.surfaceAlt);
    root.style.setProperty('--brand-primary', clientConfig.theme.primary);
    root.style.setProperty('--brand-hover', clientConfig.theme.primaryHover);
    root.style.setProperty('--brand-accent', clientConfig.theme.accent);
    root.style.setProperty('--text-secondary', clientConfig.theme.textSecondary);
    root.style.setProperty('--text-accent', clientConfig.theme.primary);
    root.style.setProperty('--border-default', clientConfig.theme.borderDefault);
    root.style.setProperty('--border-hover', clientConfig.theme.borderHover);
    root.style.setProperty('--whatsapp-color', clientConfig.theme.success);
  }, []);

  // Check if it's admin route
  const isAdminRoute = window.location.pathname.startsWith('/admin');

  if (isAdminRoute) {
    return (
      <AdminProvider>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: clientConfig.theme.surfaceAlt,
              color: '#fff',
              border: `1px solid ${clientConfig.theme.borderDefault}`,
            },
          }}
        />
        <AdminRoute />
      </AdminProvider>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'menu':
        return <MenuPage setCurrentPage={setCurrentPage} />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App bg-black min-h-screen">
      {/* Toast Notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
              background: clientConfig.theme.surfaceAlt,
            color: '#fff',
              border: `1px solid ${clientConfig.theme.borderDefault}`,
          },
        }}
      />

      {/* Navigation */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

function App() {
  return <AppContent />;
}

export default App;
